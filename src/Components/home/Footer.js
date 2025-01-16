import React from 'react'
import './Footer.css';
export default function Footer() {
  return (
    <div>
        

<footer class="bg-dark dark:bg-orange-300">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="https://flowbite.com/" class="flex items-center">
                  <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
                  <span class="self-center text-2xl font-semibold dark:text-dark">Travel.io</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="resource">Resources</h2>
                 
                  
              </div>
              <div>
                  <h2 class="follow">Follow us</h2>
                  
              </div>
              <div>
                  <h2 class="legal">Legal</h2>
                  
              </div>
          </div>
      </div>
      <hr class="my-6 border-dark-200 sm:mx-auto dark:border-dark-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
        
      </div>
    </div>
</footer>

    </div>
  )
}