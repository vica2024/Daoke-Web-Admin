<template>
  <div>
    <header>
      <nav>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-8">
          <div class="relative z-10 flex items-center gap-16">
            <a href="/" class="font-bold text-lg">
              稻客云租
            </a>
            <div class="hidden lg:flex lg:gap-10"><a
                class="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                href="/#features"><span class="relative z-10">功能</span></a>
              <a
                  class="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                  href="/#reviews"><span class="relative z-10">文档</span></a>
            </div>
          </div>
          <div class="flex items-center gap-6">
            <div class="lg:hidden" data-headlessui-state="">
              <button
                  class="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                  aria-label="Toggle site navigation" type="button" aria-expanded="false" data-headlessui-state=""
                  id="headlessui-popover-button-:R1epfja:">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-6 w-6">
                  <path d="M5 6h14M5 18h14M5 12h14" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </svg>
              </button>
            </div>
            <div hidden=""
                 style="position:fixed;top:1px;left:1px;width:1px;height:0;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none"></div>
            <!--            <a class="inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80 hidden lg:block"-->
            <!--               variant="outline" color="gray" href="/login">Log in</a>-->
            <a
                class="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 hidden lg:block"
                variant="solid" color="gray" href="#">立即体验</a>
          </div>
        </div>
      </nav>
    </header>
    <main class="flex-auto">
      <div class="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            <div class="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6"><h1
                class="text-4xl font-medium tracking-tight text-gray-900">稻客云租管理系统</h1>
              <p class="mt-6 text-lg text-gray-600">
                稻客云租管理系统是一款集民宿、物业、长租、短租和时租管理于一体的综合性平台，旨在为业主和租客提供高效、便捷的管理和服务解决方案。</p>
              <div class="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                <a aria-label="Get Start on the Github"
                   class="flex items-center p-3 rounded-lg transition-colors bg-gray-800 text-white hover:bg-gray-900"
                   href="https://github.com/vica2024/Daoke-Web-Admin">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="w-7 mr-1.5">
                    <path
                        d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3z"
                        fill="currentColor"></path>
                  </svg>
                  <span>获取代码</span>
                </a>
                <a class="rounded-lg flex items-center p-3 border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80"
                   variant="outline" color="gray" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-6 w-6 flex-none">
                    <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4"></circle>
                    <path
                        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
                        fill="#A3A3A3" stroke="#A3A3A3"></path>
                  </svg>
                  <span class="ml-2.5">视频介绍</span></a></div>
            </div>
            <div class="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
              <div
                  class="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">
                <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true"
                     class="absolute inset-0 h-full w-full animate-spinSlow">
                  <path d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                        stroke="#D4D4D4" stroke-opacity="0.7"></path>
                  <path d="M513 1025C230.23 1025 1 795.77 1 513" stroke="url(#:S1:-gradient-1)"
                        stroke-linecap="round"></path>
                  <defs>
                    <linearGradient id=":S1:-gradient-1" x1="1" y1="513" x2="1" y2="1025"
                                    gradientUnits="userSpaceOnUse">
                      <stop stop-color="#06b6d4"></stop>
                      <stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <svg viewBox="0 0 1026 1026" fill="none" aria-hidden="true"
                     class="absolute inset-0 h-full w-full animate-spinReverseSlower">
                  <path
                      d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
                      stroke="#D4D4D4" stroke-opacity="0.7"></path>
                  <path d="M913 513c0 220.914-179.086 400-400 400" stroke="url(#:S1:-gradient-2)"
                        stroke-linecap="round"></path>
                  <defs>
                    <linearGradient id=":S1:-gradient-2" x1="913" y1="513" x2="913" y2="913"
                                    gradientUnits="userSpaceOnUse">
                      <stop stop-color="#06b6d4"></stop>
                      <stop offset="1" stop-color="#06b6d4" stop-opacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                  class="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
                <div class="relative aspect-[366/729] mx-auto max-w-[366px]">
                  <div
                      class="absolute inset-y-[calc(1/729*100%)] left-[calc(7/729*100%)] right-[calc(5/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl"></div>
                  <div
                      class="absolute left-[calc(23/366*100%)] top-[calc(23/729*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden bg-gray-900 pt-[calc(23/318*100%)]">
                    <div class="flex flex-col">
                      <div class="flex justify-between px-4 pt-4">
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-6 w-6 flex-none">
                          <path d="M5 6h14M5 18h14M5 12h14" stroke="#fff" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </svg>
                        <span class="text-gray-50 font-bold">稻客云租</span>
                        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-6 w-6 flex-none">
                          <path
                              d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z"
                              stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                      </div>
                      <div class="mt-6 flex-auto rounded-t-2xl bg-white">
                        <div class="p-4">
                          <div class="flex gap-2 items-center">
                            <div class="text-xs leading-6 text-gray-500">稻客AI云租系统作者</div>
                            <div class="text-sm text-gray-900 font-bold text-xs">Vica Zhuo</div>
                            <svg viewBox="0 0 24 24" class="ml-auto h-6 w-6" fill="none">
                              <path d="M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0ZM12 9v6M15 12H9" stroke="#171717"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                          </div>
                          <div class="mt-3 border-t border-gray-200 pt-5">
                            <div class="flex items-baseline gap-2">
                              <div class="text-2xl tabular-nums tracking-tight text-gray-900">昨日租金：¥752.56</div>
                              <div class="text-sm text-gray-900"></div>
                              <div class="ml-auto text-sm tabular-nums tracking-tight text-cyan-500">+12.21%</div>
                            </div>
                            <div class="mt-6 flex gap-4 text-xs text-gray-500">
                              <div>年</div>
                              <div>月</div>
                              <div>周</div>
                              <div class="font-semibold text-cyan-600">天</div>
                            </div>
                            <div class="mt-3 rounded-lg bg-gray-50 ring-1 ring-inset ring-black/5">
                              <svg viewBox="0 0 286 208" class="overflow-visible">
                                <defs>
                                  <clipPath id=":R3kl37qfja:-clip">
                                    <path
                                        d="M 16.0000 32.0000L 23.9375 47.4709L 31.8750 39.3576L 39.8125 80.0116L 47.7500 63.6279L 55.6875 79.3140L 63.6250 87.8140L 71.5625 98.9128L 79.5000 71.6366L 87.4375 127.3372L 95.3750 120.1308L 103.3125 112.3023L 111.2500 120.2355L 119.1875 144.6337L 127.1250 176.0000L 135.0625 162.2326L 143.0000 144.3634L 150.9375 152.3953L 158.8750 144.6221L 166.8125 129.9535L 174.7500 103.3517L 182.6875 112.3401L 190.6250 136.2645L 198.5625 129.6337L 206.5000 120.0959L 214.4375 153.2965L 222.3750 136.5233L 230.3125 143.7035L 238.2500 132.5581L 246.1875 159.0494L 254.1250 144.2413L 262.0625 127.0233L 270.0000 103.2209 V 176 H 16 Z"></path>
                                  </clipPath>
                                  <linearGradient id=":R3kl37qfja:-gradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stop-color="#13B5C8"></stop>
                                    <stop offset="100%" stop-color="#13B5C8" stop-opacity="0"></stop>
                                  </linearGradient>
                                </defs>
                                <line stroke="#a3a3a3" opacity="0.1" x1="0" y1="34.666666666666664" x2="286"
                                      y2="34.666666666666664"></line>
                                <line stroke="#a3a3a3" opacity="0.1" x1="0" y1="69.33333333333333" x2="286"
                                      y2="69.33333333333333"></line>
                                <line stroke="#a3a3a3" opacity="0.1" x1="0" y1="104" x2="286" y2="104"></line>
                                <line stroke="#a3a3a3" opacity="0.1" x1="0" y1="138.66666666666666" x2="286"
                                      y2="138.66666666666666"></line>
                                <line stroke="#a3a3a3" opacity="0.1" x1="0" y1="173.33333333333331" x2="286"
                                      y2="173.33333333333331"></line>
                                <rect y="32" width="270px" height="144" fill="url(#:R3kl37qfja:-gradient)"
                                      clip-path="url(#:R3kl37qfja:-clip)" opacity="0.5"></rect>
                                <path
                                    d="M 16.0000 32.0000L 23.9375 47.4709L 31.8750 39.3576L 39.8125 80.0116L 47.7500 63.6279L 55.6875 79.3140L 63.6250 87.8140L 71.5625 98.9128L 79.5000 71.6366L 87.4375 127.3372L 95.3750 120.1308L 103.3125 112.3023L 111.2500 120.2355L 119.1875 144.6337L 127.1250 176.0000L 135.0625 162.2326L 143.0000 144.3634L 150.9375 152.3953L 158.8750 144.6221L 166.8125 129.9535L 174.7500 103.3517L 182.6875 112.3401L 190.6250 136.2645L 198.5625 129.6337L 206.5000 120.0959L 214.4375 153.2965L 222.3750 136.5233L 230.3125 143.7035L 238.2500 132.5581L 246.1875 159.0494L 254.1250 144.2413L 262.0625 127.0233L 270.0000 103.2209"
                                    fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                    pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"
                                    stroke="#06b6d4"></path>
                              </svg>
                            </div>
                            <div
                                class="mt-4 rounded-lg bg-cyan-500 px-4 py-2 text-center text-sm font-semibold text-white">
                              Trade
                            </div>
                            <div class="mt-3 divide-y divide-gray-100 text-sm">
                              <div class="flex justify-between py-1">
                                <div class="text-gray-500">Open</div>
                                <div class="font-medium text-gray-900">6,387.55</div>
                              </div>
                              <div class="flex justify-between py-1">
                                <div class="text-gray-500">Closed</div>
                                <div class="font-medium text-gray-900">6,487.09</div>
                              </div>
                              <div class="flex justify-between py-1">
                                <div class="text-gray-500">Low</div>
                                <div class="font-medium text-gray-900">6,322.01</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <svg viewBox="0 0 366 729" aria-hidden="true"
                       class="pointer-events-none absolute inset-0 h-full w-full fill-gray-100">
                    <path fill="#F2F2F2" fill-rule="evenodd" clip-rule="evenodd"
                          d="M300.092 1c41.22 0 63.223 21.99 63.223 63.213V184.94c-.173.184-.329.476-.458.851.188-.282.404-.547.647-.791.844-.073 2.496.257 2.496 2.157V268.719c-.406 2.023-2.605 2.023-2.605 2.023a7.119 7.119 0 0 1-.08-.102v394.462c0 41.213-22.001 63.212-63.223 63.212h-95.074c-.881-.468-2.474-.795-4.323-.838l-33.704-.005-.049.001h-.231l-.141-.001c-2.028 0-3.798.339-4.745.843H66.751c-41.223 0-63.223-21.995-63.223-63.208V287.739c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 284.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-16.289c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 214.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-26.041a2.26 2.26 0 0 0 .093-.236l-.064-.01a3.337 3.337 0 0 1-.72-.12l-.166-.028A2 2 0 0 1 1 135.62v-24.611a2 2 0 0 1 1.671-1.973l.857-.143v-44.68C3.528 22.99 25.53 1 66.75 1h233.341ZM3.952 234.516a5.481 5.481 0 0 0-.229-.278c.082.071.159.163.228.278Zm89.99-206.304A4.213 4.213 0 0 0 89.727 24H56.864C38.714 24 24 38.708 24 56.852v618.296C24 693.292 38.714 708 56.864 708h250.272c18.15 0 32.864-14.708 32.864-32.852V56.852C340 38.708 325.286 24 307.136 24h-32.864a4.212 4.212 0 0 0-4.213 4.212v2.527c0 10.235-8.3 18.532-18.539 18.532H112.48c-10.239 0-18.539-8.297-18.539-18.532v-2.527Z"></path>
                    <rect x="154" y="29" width="56" height="5" rx="2.5" fill="#D4D4D4"></rect>
                  </svg>
                  <img alt="" fetchpriority="high" width="366" height="729" decoding="async" data-nimg="1"
                       class="pointer-events-none absolute inset-0 h-full w-full" style="color:transparent"
                       src="../../assets/images/phone-frame.d4b6b62a.svg">
                  </div>
              </div>
            </div>
            <div class="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6"><p
                class="text-center text-sm font-semibold text-gray-900 lg:text-left">适用场景</p>
              <ul role="list"
                  class="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start">
                <li class="flex">小众民宿品牌</li>
                <li class="flex">长租公寓品牌运营公司</li>
                <li class="flex">长租公寓管理公司</li>
                <li class="flex">住宅物业管理公司</li>
                <li class="flex">商业物业管理公司</li>
                <li class="flex">大型短租公寓管理公司</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <home-mobiles/>
      <home-recomtation></home-recomtation>
    </main>
    <home-footer></home-footer>
  </div>
</template>

<script setup>

import HomeFooter from "@/views/home/components/home-footer.vue";
import HomeRecomtation from "@/views/home/components/home-recomtation.vue";
import HomeMobiles from "@/views/home/components/home-mobiles.vue";
</script>
<style lang="less" scoped>
</style>
