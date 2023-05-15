<template>
  <div class="License-container">
    <div>
      <h6>MIT License</h6>
      <h6 :style="{color: 'rgb(0,255,0)'}">Copyright (c) 2022 niklaus</h6>
      <h6>
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
      </h6>
      <h6>
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
      </h6>
      <h6>
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE
      </h6>
    </div>
  </div>
</template>

<script setup>
  const router = useRouter()
  const {data: indexP } = await useFetch('https://raw.githubusercontent.com/nikischwdrtr/niklausiffch_api/main/index.json')
  const index = JSON.parse(indexP.value)
  index.forEach((item, i) => {
    index[i].push(i)
  })
</script>

<style lang="scss">
.License-container {
  position: absolute;
  width: 60%;
  right: 1%;
  div {
    position: absolute;
  }
  h6 {
    margin-bottom: 20px;
  }
}
@media (max-width: 600px) {
  .License-container {
    h6 {
      font-size: medium !important;
    }
  }
}
</style>