import React from 'react'
import {PricingTable} from '@clerk/clerk-react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log('PricingTable Error:', error.message)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='mt-14 max-sm:mx-8 p-6 bg-blue-50 rounded-lg'>
          <p className='text-center text-gray-600'>Pricing table will be available in production. Enable billing in Clerk dashboard to view in development.</p>
        </div>
      )
    }

    return this.props.children
  }
}

const Plan = () => {
  return (
    <div className='max-w-2xl mx-auto z-20 my-30'>

      <div className='text-center'>
        <h2 className='text-slate-700 text-[42px] font-semibold'>Choose Your Plan</h2>
        <p className='text-gray-500 max-w-lg mx-auto'>Start for free and scale up as you grow. Find the perfect plan for your content creation needs.</p>
      </div>

      <ErrorBoundary>
        <div className='mt-14 max-sm:mx-8'>
          <PricingTable />
        </div>
      </ErrorBoundary>

    </div>
  )
}

export default Plan
