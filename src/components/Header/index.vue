<template>
    <div class="header-1 flex flex-col bg-gray-200 ">
        <nav class="bg-gray-800 px-4 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0">
            <div class="flex justify-between items-center lg:mr-32">
                <span class="text-white text-xl">
                    <RouterLink to="/">FWR</RouterLink></span>
                <button class="border border-white px-2 py-1 rounded text-white opacity-50 hover:opacity-75 lg:hidden"
                    id="navbar-toggle">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            <div class="hidden lg:flex flex-grow" id="navbar-collapse">
                <ul class="flex flex-col mt-3 mb-1 lg:flex-row lg:mx-auto lg:mt-0 lg:mb-0">
                    <li>
                        <div class="block text-gray-500 hover:text-gray-300 py-2 md:mx-2">
                            <RouterLink to="/">
                                Home
                            </RouterLink>
                        </div>
                    </li>
                    <li>
                        <div class="block text-gray-500 hover:text-gray-300 py-2 md:mx-2">
                            <RouterLink to="/about">
                                About
                            </RouterLink>
                        </div>
                    </li>
                    <li>
                    <div class="block text-gray-500 hover:text-gray-300 py-2 md:mx-2">
                            <RouterLink to="/features">
                                Features
                            </RouterLink>
                        </div>
                    </li>
                    <li>
                    <div class="block text-gray-500 hover:text-gray-300 py-2 md:mx-2">
                            <RouterLink to="/contact">
                                Contact
                            </RouterLink>
                        </div>
                    </li>
                    <li>
                    <div class="block text-gray-500 hover:text-gray-300 py-2 md:mx-2">
                            <RouterLink to="/blog">
                                Blog
                            </RouterLink>
                        </div>
                    </li>
                </ul>
                <div class="flex my-3 lg:my-0">

                    <button
                        class="bg-transparent hover:bg-white text-white hover:text-gray-900 py-1 px-3 rounded border border-solid border-white mr-2">
                        <RouterLink to="/signin">
                            Sign In
                        </RouterLink>
                    </button>
                    <button
                        class="bg-purple-700 hover:bg-purple-800 text-white py-1 px-3 rounded border border-solid border-purple-700 hover:border-purple-800">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    </div>
</template>