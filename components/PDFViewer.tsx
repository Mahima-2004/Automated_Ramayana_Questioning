'use client'

import { useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { useLanguage } from '@/contexts/LanguageContext'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

interface PDFViewerProps {
  chapterId: number
  pdfUrl: string
  startPage?: number
  endPage?: number
  multiplePdfs?: string[]
}

interface PDFInfo {
  url: string
  numPages: number
  startPage: number
  endPage: number
}

export default function PDFViewer({ chapterId, pdfUrl, startPage, endPage, multiplePdfs }: PDFViewerProps) {
  const { t } = useLanguage()
  const [pdfs, setPdfs] = useState<PDFInfo[]>([])
  const [currentPdfIndex, setCurrentPdfIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [totalPages, setTotalPages] = useState(0)

  // Initialize PDFs array
  useEffect(() => {
    if (multiplePdfs && multiplePdfs.length > 0) {
      // Multiple PDFs - will load them sequentially
      setPdfs(multiplePdfs.map((url, index) => ({
        url,
        numPages: 0,
        startPage: 1,
        endPage: 0,
      })))
      setCurrentPage(1)
    } else {
      // Single PDF
      const initialStartPage = startPage || 1
      setPdfs([{
        url: pdfUrl,
        numPages: 0,
        startPage: initialStartPage,
        endPage: endPage || 0,
      }])
      setCurrentPage(initialStartPage)
    }
  }, [pdfUrl, multiplePdfs, startPage, endPage])

  const currentPdf = pdfs[currentPdfIndex]
  // Used for bounds checking in single PDF mode
  const effectiveEndPage = currentPdf?.endPage || currentPdf?.numPages || 0

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setPdfs((prev) => {
      const updated = [...prev]
      // Only update endPage if it wasn't specified (0)
      const currentEndPage = updated[currentPdfIndex].endPage
      updated[currentPdfIndex] = {
        ...updated[currentPdfIndex],
        numPages,
        endPage: currentEndPage === 0 ? numPages : currentEndPage,
      }

      // Calculate total pages across all PDFs or range
      // If single PDF with range, total is range size
      if (updated.length === 1 && startPage && endPage) {
        setTotalPages(endPage - startPage + 1)
      } else {
        const total = updated.reduce((sum, pdf) => sum + pdf.numPages, 0)
        setTotalPages(total)
      }

      return updated
    })
    setLoading(false)
    setError(false)
  }

  function onDocumentLoadError() {
    setLoading(false)
    setError(true)
  }

  // Navigate to next/previous page across multiple PDFs
  const goToNextPage = () => {
    if (!currentPdf) return

    // Check against effective end page
    const limitPage = currentPdf.endPage > 0 ? currentPdf.endPage : currentPdf.numPages

    if (currentPage < limitPage) {
      // Next page in current PDF
      setCurrentPage(currentPage + 1)
    } else if (currentPdfIndex < pdfs.length - 1) {
      // Move to next PDF
      setCurrentPdfIndex(currentPdfIndex + 1)
      setCurrentPage(1)
    }
  }

  const goToPreviousPage = () => {
    if (!currentPdf) return

    // Check against start page
    if (currentPage > currentPdf.startPage) {
      // Previous page in current PDF
      setCurrentPage(currentPage - 1)
    } else if (currentPdfIndex > 0) {
      // Move to previous PDF
      const prevPdf = pdfs[currentPdfIndex - 1]
      setCurrentPdfIndex(currentPdfIndex - 1)
      // If previous PDF has explicit end page, go there, else numPages
      const prevLimit = prevPdf.endPage > 0 ? prevPdf.endPage : prevPdf.numPages
      setCurrentPage(prevLimit)
    }
  }

  // Calculate global page number across all PDFs
  const getGlobalPageNumber = () => {
    // If single PDF with range, show relative page number
    if (pdfs.length === 1 && startPage) {
      return currentPage - startPage + 1
    }

    let globalPage = 0
    for (let i = 0; i < currentPdfIndex; i++) {
      globalPage += pdfs[i].numPages
    }
    return globalPage + currentPage
  }

  if (error) {
    return (
      <div className="w-full">
        <div className="bg-transparent backdrop-blur-none rounded-3xl p-10 border-2 border-gold-500/20 shadow-2xl relative overflow-hidden">
          <div className="text-center">
            <div className="text-6xl mb-4">📖</div>
            <h3 className="text-4xl font-cinzel font-bold text-gold-300 mb-4 drop-shadow-2xl">
              {t('pdf.sacredTextNotAvailable')}
            </h3>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6"></div>
            <p className="text-white mb-8 drop-shadow-[0_0_10px_rgba(0,0,0,0.9)] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)] font-playfair text-lg">
              {t('pdf.sacredTextNotAvailableDesc')}
            </p>
            <div className="bg-transparent backdrop-blur-none rounded-2xl p-8 mb-8 text-left border-2 border-gold-500/20">
              <h4 className="font-cinzel font-bold text-2xl text-gold-300 mb-6 drop-shadow-lg">
                📚 {t('pdf.freeSources')}
              </h4>
              <div className="space-y-3 text-white/90 text-sm">
                <p className="drop-shadow-md">
                  <strong>{t('pdf.projectGutenberg')}</strong>
                  <br />
                  <a href="https://www.gutenberg.org/ebooks/search/?query=ramayana" target="_blank" rel="noopener noreferrer" className="text-gold-300 underline hover:text-gold-200 font-playfair transition-colors">
                    {t('pdf.visit')} Project Gutenberg
                  </a>
                </p>
                <p className="drop-shadow-md">
                  <strong>{t('pdf.internetArchive')}</strong>
                  <br />
                  <a href="https://archive.org/search.php?query=ramayana" target="_blank" rel="noopener noreferrer" className="text-gold-300 underline hover:text-gold-200 font-playfair transition-colors">
                    {t('pdf.visit')} Internet Archive
                  </a>
                </p>
                <p className="drop-shadow-md">
                  <strong>{t('pdf.sacredTexts')}</strong>
                  <br />
                  <a href="https://www.sacred-texts.com/hin/rama/index.htm" target="_blank" rel="noopener noreferrer" className="text-gold-300 underline hover:text-gold-200 font-playfair transition-colors">
                    {t('pdf.visit')} Sacred Texts
                  </a>
                </p>
                <p className="mt-4 text-white font-semibold drop-shadow-md">
                  📥 {t('pdf.toAddPdfs')}
                </p>
              </div>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => window.location.href = '/dashboard'}
                className="bg-gradient-to-r from-gold-600 to-saffron-600 hover:from-gold-500 hover:to-saffron-500 text-white font-cinzel font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-gold-400/50"
              >
                {t('pdf.backToChapters')}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 bg-transparent backdrop-blur-none p-5 rounded-xl shadow-xl border-2 border-gold-500/20">
        <div className="flex items-center gap-4 flex-wrap">
          <button
            onClick={goToPreviousPage}
            disabled={currentPdfIndex === 0 && currentPage <= (startPage || 1)}
            className="bg-gradient-to-r from-gold-600 to-saffron-600 hover:from-gold-500 hover:to-saffron-500 text-white font-cinzel font-bold py-3 px-8 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-gold-400/50"
          >
            {t('pdf.previous')}
          </button>
          <div className="bg-transparent backdrop-blur-none px-5 py-3 rounded-lg shadow-lg border-2 border-gold-400/30">
            <span className="text-white font-cinzel font-semibold drop-shadow-[0_0_10px_rgba(0,0,0,0.9)] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.9)] text-lg">
              {t('pdf.page')} <span className="text-gold-300 font-bold">{getGlobalPageNumber()}</span>
              {totalPages > 0 && (
                <>
                  {' '}/ <span className="text-gold-300 font-bold">{totalPages}</span>
                </>
              )}
              {pdfs.length > 1 && (
                <span className="text-white/80 text-sm ml-2 drop-shadow-[0_0_8px_rgba(0,0,0,0.9)]">
                  ({t('pdf.pdf')} {currentPdfIndex + 1}/{pdfs.length}, {t('pdf.page')} {currentPage}/{currentPdf?.numPages || 0})
                </span>
              )}
            </span>
          </div>
          <button
            onClick={goToNextPage}
            disabled={currentPdfIndex === pdfs.length - 1 && currentPage >= (currentPdf?.endPage || currentPdf?.numPages || 0)}
            className="bg-gradient-to-r from-gold-600 to-saffron-600 hover:from-gold-500 hover:to-saffron-500 text-white font-cinzel font-bold py-3 px-8 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-gold-400/50"
          >
            {t('pdf.next')}
          </button>
        </div>
        <div className="flex gap-2">
          {pdfs.length > 1 && pdfs.map((pdf, index) => (
            <a
              key={index}
              href={pdf.url}
              download
              className={`bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-cinzel font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-green-400/50 ${index === currentPdfIndex ? 'ring-2 ring-gold-400' : ''
                }`}
              title={`PDF ${index + 1}`}
            >
              📥 {index + 1}
            </a>
          ))}
          {pdfs.length === 1 && (
            <a
              href={currentPdf?.url || pdfUrl}
              download
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-cinzel font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border-2 border-green-400/50"
            >
              {t('pdf.download')}
            </a>
          )}
        </div>
      </div>

      <div className="flex justify-center bg-transparent backdrop-blur-none rounded-2xl p-8 min-h-[600px] shadow-2xl border-2 border-gold-500/20">
        {loading && (
          <div className="flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-600 mb-4"></div>
            <div className="text-xl text-gold-300 font-cinzel font-semibold drop-shadow-lg">{t('pdf.loading')}</div>
          </div>
        )}
        {currentPdf && (
          <Document
            file={currentPdf.url}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={
              <div className="flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-600 mb-4"></div>
                <div className="text-xl text-gold-300 font-cinzel font-semibold drop-shadow-lg">{t('pdf.loading')}</div>
              </div>
            }
            error={null}
          >
            <Page
              pageNumber={currentPage}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="shadow-2xl rounded-lg"
              width={Math.min(900, typeof window !== 'undefined' ? window.innerWidth - 120 : 900)}
            />
          </Document>
        )}
      </div>
    </div>
  )
}

