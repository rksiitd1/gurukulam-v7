import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Calculator, Download, CheckCircle } from "lucide-react"

export function TaxBenefits() {
  const taxExamples = [
    {
      income: "₹5,00,000",
      donation: "₹25,000",
      taxSaving: "₹7,750",
      effectiveCost: "₹17,250",
    },
    {
      income: "₹10,00,000",
      donation: "₹50,000",
      taxSaving: "₹15,500",
      effectiveCost: "₹34,500",
    },
    {
      income: "₹15,00,000",
      donation: "₹75,000",
      taxSaving: "₹23,250",
      effectiveCost: "₹51,750",
    },
  ]

  const documents = [
    {
      title: "80G Certificate",
      description: "Official tax exemption certificate",
      icon: FileText,
      available: "Immediately after donation",
    },
    {
      title: "Annual Report",
      description: "Detailed impact and financial report",
      icon: Download,
      available: "Every March",
    },
    {
      title: "Donation Receipt",
      description: "Official receipt for your records",
      icon: CheckCircle,
      available: "Instant email delivery",
    },
  ]

  return (
    <section className="py-8 sm:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tax Benefits & Documentation</h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Maximize your impact while saving on taxes. We're registered under 80G and 12A for maximum tax benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12">
          {/* Tax Benefits Explanation */}
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center text-lg sm:text-xl">
                  <Calculator className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-600" />
                  80G Tax Deduction Benefits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <h4 className="font-semibold text-sm sm:text-base text-blue-900 mb-2">How it Works:</h4>
                    <ul className="text-xs sm:text-sm text-blue-800 space-y-1">
                      <li>• Deduction up to 50% of your donation amount</li>
                      <li>• Reduces your taxable income directly</li>
                      <li>• Available for both individual and corporate donors</li>
                      <li>• Valid for donations made throughout the financial year</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                    <h4 className="font-semibold text-sm sm:text-base text-green-900 mb-2">Registration Details:</h4>
                    <div className="text-xs sm:text-sm text-green-800 space-y-1">
                      <div>
                        <strong>80G Registration:</strong> AABCD1234E20214
                      </div>
                      <div>
                        <strong>12A Registration:</strong> AABCD1234E20215
                      </div>
                      <div>
                        <strong>Valid Until:</strong> March 2027
                      </div>
                      <div>
                        <strong>PAN:</strong> AABCD1234E
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tax Calculation Examples */}
            <Card className="hidden lg:block">
              <CardHeader>
                <CardTitle>Tax Saving Examples</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {taxExamples.map((example, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-sm">
                        <div>
                          <div className="text-gray-600">Annual Income</div>
                          <div className="font-semibold">{example.income}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Donation Amount</div>
                          <div className="font-semibold">{example.donation}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Tax Saving (31%)</div>
                          <div className="font-semibold text-green-600">{example.taxSaving}</div>
                        </div>
                        <div>
                          <div className="text-gray-600">Effective Cost</div>
                          <div className="font-semibold text-blue-600">{example.effectiveCost}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> Tax savings calculated at 31% tax rate (30% + 1% cess). Actual savings may
                    vary based on your tax slab.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Documentation & Process */}
          <div className="hidden lg:block">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <doc.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900">{doc.title}</h4>
                        <p className="text-sm text-gray-600 mb-1">{doc.description}</p>
                        <p className="text-xs text-blue-600 font-medium">{doc.available}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Process Steps */}
            <Card>
              <CardHeader>
                <CardTitle>Simple 3-Step Process</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-orange-100 text-orange-600 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm sm:text-base">Make Your Donation</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Complete your secure online donation</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-orange-100 text-orange-600 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm sm:text-base">Receive 80G Certificate</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Get your tax exemption certificate via email</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-orange-100 text-orange-600 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm sm:text-base">Claim Tax Deduction</h4>
                      <p className="text-xs sm:text-sm text-gray-600">Use the certificate while filing your ITR</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <Download className="w-4 h-4 mr-2" />
                    Download Sample 80G Certificate
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Contact for Tax Queries */}
            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-4 sm:p-6 mt-6">
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Need Help with Tax Benefits?</h3>
              <p className="text-gray-700 text-xs sm:text-sm mb-4">
                Our team is here to help you understand tax implications and maximize your benefits.
              </p>
              <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 w-full sm:w-auto text-sm">
                Contact Tax Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
