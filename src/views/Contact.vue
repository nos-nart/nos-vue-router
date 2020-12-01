<template>
  <div class="flex my-12 mx-40">
    <div class="max-w-xs flex flex-col items-start">
      <p class="p-2 rounded hover:bg-blue-200 w-full hover:text-blue-500 transition-all duration-200 cursor-pointer">Pháp lý</p>
      <p class="p-2 rounded hover:bg-blue-200 w-full hover:text-blue-500 transition-all duration-200 cursor-pointer">Văn phòng toàn cầu</p>
      <p class="p-2 rounded hover:bg-blue-200 w-full hover:text-blue-500 transition-all duration-200 cursor-pointer">Liên hệ với chúng tôi</p>
      <p class="p-2 rounded hover:bg-blue-200 w-full hover:text-blue-500 transition-all duration-200 cursor-pointer">Truyền thông</p>
      <p class="p-2 rounded hover:bg-blue-200 w-full hover:text-blue-500 transition-all duration-200 cursor-pointer">Cơ hội nghề nghiệp</p>
    </div>
    <div class="flex-1 ml-20">
      <p class="text-2xl">Liên hệ công ty</p>
      <div class="mt-6 grid grid-cols-2 gap-4">
        <div class="rounded bg-blue-200 bg-opacity-25 p-6" v-for="(item, index) in mock" :key="index">
          <p class="font-bold">{{ item.ques }}</p>
          <p class="text-blue-500 underline mt-4 text-sm">{{ item.ans }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  components: {},
  data() {
    return {
      mock: [{
          ques: 'Bạn cần thay đổi đặt phòng?',
          ans: 'Hãy truy cập trang Đặt phòng'
        }, {
          ques: 'Bạn cần hỗ trợ về một đặt phòng nào đó?',
          ans: 'Đăng nhập để sử dụng Trung tâm Trợ giúp'
        }, {
          ques: 'Có thắc mắc về Booking.com dành cho Doanh Nghiệp?',
          ans: 'Tìm hiểu thêm về dịch vụ của chúng tôi'
        }, {
          ques: 'Bạn thuộc cơ quan báo chí?',
          ans: 'Hãy truy cập phần Trung Tâm Báo Chí của chúng tôi'
        }, {
          ques: 'Bạn muốn gửi yêu cầu cung cấp dữ liệu?',
          ans: 'Xem trang "Thực Thi Pháp Luật" của chúng tôi'
        }, {
          ques: 'Là chỗ nghỉ và đang cần trợ giúp?',
          ans: 'Hãy liên hệ Trung Tâm Hỗ Trợ Đối Tác'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>