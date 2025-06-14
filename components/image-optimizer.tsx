'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Upload, Image, Zap, Download } from 'lucide-react'

export function ImageOptimizer() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [optimizing, setOptimizing] = useState(false)
  const [optimized, setOptimized] = useState(false)

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setOptimized(false)
    }
  }

  const handleOptimize = async () => {
    if (!selectedFile) return

    setOptimizing(true)
    // Simulate optimization process
    await new Promise(resolve => setTimeout(resolve, 2000))
    setOptimizing(false)
    setOptimized(true)
  }

  return (
    <section className="py-20 px-4 sm:px-6 bg-gray-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Image <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Optimizer</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Compress and optimize images for better web performance without losing quality.
          </p>
        </div>

        <Card className="bg-gray-800/50 border-gray-700 max-w-2xl mx-auto">
          <CardContent className="p-8">
            <div className="space-y-6">
              {/* File Upload */}
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-300 mb-2">Click to upload an image</p>
                  <p className="text-sm text-gray-500">Supports JPG, PNG, WebP</p>
                </label>
              </div>

              {/* Selected File Info */}
              {selectedFile && (
                <div className="bg-gray-700/50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Image className="h-8 w-8 text-blue-400" />
                    <div>
                      <p className="text-white font-medium">{selectedFile.name}</p>
                      <p className="text-sm text-gray-400">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Optimize Button */}
              {selectedFile && !optimized && (
                <Button 
                  onClick={handleOptimize}
                  disabled={optimizing}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  {optimizing ? (
                    <>
                      <Zap className="h-4 w-4 mr-2 animate-spin" />
                      Optimizing...
                    </>
                  ) : (
                    <>
                      <Zap className="h-4 w-4 mr-2" />
                      Optimize Image
                    </>
                  )}
                </Button>
              )}

              {/* Optimization Result */}
              {optimized && (
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-400 font-medium">Optimization Complete!</p>
                      <p className="text-sm text-gray-300">Size reduced by 65%</p>
                    </div>
                    <Button variant="outline" size="sm" className="border-green-500/50 text-green-400 hover:bg-green-500/10">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-700">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">65%</div>
                  <div className="text-sm text-gray-400">Size Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">100%</div>
                  <div className="text-sm text-gray-400">Quality Preserved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">&lt;2s</div>
                  <div className="text-sm text-gray-400">Processing Time</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default ImageOptimizer