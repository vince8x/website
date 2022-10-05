export default () => {
    return new Promise(function(resolve) {
      resolve({
        common: {
          title: '',
          subtitle: '',
          error_with_status: 'Đã xảy ra lỗi trên máy.',
          '404': 'Không tìm thấy trang này.',
          '404_subtitle':
          'Vui lòng chờ trong giây lát, hoặc quay trở lại nơi bắt đầu.',
          back: 'Quay lại trang chủ.',
        login: '',
        login_create: '',
        login_or: '',
        login_email: '',
        login_password: '',
        login_remember: '',
        login_forgot: '',
        continue: '',
        login_title: '',
        login_subtitle: '',
        register: '',
        register_already: '',
        register_or: '',
        register_name: '',
        register_email: '',
        register_password: '',
        register_confirm: '',
        register_title: '',
        register_subtitle: '',
        accept: '',
        gb: 'English',
        pl: 'Polski',
        de: 'Deutsch',
        cn: '中国',
        pt: '󠁥󠁮󠁧󠁿Português',
        id: '󠁥󠁮󠁧󠁿Bahasa Indonesia',
        in: '󠁥󠁮󠁧󠁿हिन्दी',
        ar: '󠁥󠁮󠁧󠁿العربيّة',
        vi: "Tiếng Việt",
        notif_msg: '',
      },
      calculator: {
        title: 'Tính năng lực đào Lotus:',
        subtitle: '',
        user_rewards_xpi: 'Phần thưởng hằng ngày:',
        user_electricity_costs: 'Tiền điện hằng ngày:',
        gpu_question: 'Card đồ họa (GPU) đang sử dụng?',
        user_hashrate: 'Chỉ số Hashrate là bao nhiêu? *',
        user_power_consumption: 'Điện năng tiêu thụ là bao nhiêu? *',
        watt_cost: 'Tại khu vực của bạn 1 kwh điện tốn bao nhiêu tiền?',
        advanced: 'Hiển thị nâng cao',
        avg_price: 'Mức giá trung bình [USDT]',
        current_difficulty: 'Khó khăn hiện tại',
        total_network_hashrate: 'Mạng lưới hashrate',
        update_data: 'Nạp dữ liệu',
        rewards: 'Phần thưởng'
        electricity_costs: 'Chi phí điện',
        hourly: 'Giờ',
        daily: 'Ngày',
        weekly: 'Tuần',
        monthly: 'Tháng',
        period: 'Giai đoạn/ Chu kỳ',
        meta: {
          description:
            'Tính toán phần thưởng và chi phí điện năng để đào Lotus cho card màn hình của bạn.',
          subtitle: 'Tính toán phần thưởng',
          name: 'Bản tính',
        },        
      },
      menu: {
        news: 'Tin tức/ Sự kiện',
        more: 'Thêm',
        calculator: 'Tính toán phần thưởng',
        wallets: 'Ví',
      },
      walletsPage: {
        wallets: 'Ví',
        title: 'Danh  những ví Lotus đang khả dụng trong hệ thống:',
      },                       
        lotusLanding: {
          features: {
            title: 'Mục tiêu của chúng tôi',
            feature1: {
              title: 'Hợp đồng thông minh',
              description:
                'Taproot với trạng thái, số nguyên lớn hơn, nhiều opcodes và chữ ký thông minh sighash mới',
            },
            feature2: {
              title: 'Tự gây quỹ / Vốn tự có',
              description:
                '50% số coin mới được trao cho thợ đào, 50% trao cho các dự án cộng đồng',
            },
            feature3: {
              title: 'Khả năng mở rộng/ Tiềm năng mở rộng',
              description:
                'Dựa trên cơ sở mã nguồn của eCash, cho phép mở rộng quy mô lên đến 1 triệu giao dịch trong 1 giây ',
            },
            feature4: {
              title: 'Sự ổn định',
              description:
                'Những đồng coin mới được phát hành dựa theo quy luật cung cầu',
            },
          },
          story: {
            section1: {
              headtitle: 'Nhiệm vụ của chúng tôi/ Sứ mệnh của chúng tôi',
              title: 'Biểu tượng mạnh mẽ của sự tri ân',
              text:
                'Mỗi ngày, những trải nghiệm trong tương tác hàng ngày khiến cho cuộc sống của ta trở nên phong phú và có ý nghĩa hơn. Chúng ta nói với nhau lời "Cảm ơn". Nhưng lời nói thường thoáng qua. Ai cũng có thể dễ dàng bày tỏ sự tri ân từ tấm lòng thông qua lời nói. Làm cách nào để chúng ta có thể chuyển đổi sự tri ân ấy bằng một thứ khác ý nghĩa hơn? Thế giới sẽ ra sao nếu chúng ta có một cách khác hiệu quả hơn để bày tỏ lòng biết ơn với nhau? Điều gì sẽ xảy ra nếu chúng ta có thể giữ mãi “Sự Tri  n” bằng Lotus? ',
            },
            section2: {
              headtitle: 'Lòng biết ơn vô hạn',
              title: 'Niềm vui từ việc cho và nhận',
              text:
                'Lotus là dự án nhằm nâng cao giá trị cốt lõi của việc cho và nhận. Chúng tôi muốn hướng mọi người tới những hành động tích cực và tránh những hành động mang năng lượng không tốt. Và chúng tôi đang tạo ra một cách đúng đắn để thực hiện điều này. Hoa thường được dùng để biểu hiện cho sự trân quý nhau nhưng không thể nào giữ mãi khi đã úa tàn. Tuy nhiên với những bông hoa được số hóa thì chúng ta có thể giữ mãi bên mình. Token không có tính hữu hình cũng không thể hư hỏng. Hoa sen (Lotus) là biểu tượng cho sự tinh khiết, giác ngộ, tái sinh và tái tạo. Đó là cũng chính là những giá trị cốt lõi mà chúng tôi hướng đến với Lotus token.',
            },
            section3: {
              headtitle: 'Cộng đồng là trên hết',
              title:
                'Lotus là sự đổi mới hướng tới cộng đồng nhằm đảm bảo sự tri ân luôn được gìn giữ.', 
              text:
              'Sổ cái Lotus token dựa trên nguyên lý không cần cấp phép (permissionless), không bị kiểm duyệt (uncensorable), và là một blockchain mở được duy trì và phát hành từ phần mềm do tổ chức Logos Foundation phát triển. Những token được đào với cơ chế chứng thực năng lượng (Proof-of-work) được trao như là một phần thưởng cho các lập trình viên - những người với niềm đam mê đã tạo ra hệ thống cơ sở hạ tầng cho phép đồng token tồn tại và có thể giao dịch trên thị trường, đồng thời cũng được trao cho các thợ đào kiên trì cần mẫn duy trì độ chính xác của Blockchain. Chúng được gọi chung là “Phần thưởng khối” (Block Rewards) – luôn công khai và minh bạch. Không giống như Bitcoin là một tài sản đầu cơ, Lotus mang giá trị yêu thương sâu sắc không thể nào định giá được, biểu trưng cho sự tri ân. Lịch trình phần thưởng được lập trình để có thể đáp ứng trước những nhu cầu thay đổi của thị trường và lạm phát. Lotus là một đồng tiền cấp phát mở rộng không hạn chế, nên không có lý do gì phải tích trữ, trừ khi xem đó như là những kỷ vật mà người khác đã tri ân cho ta. Lotus không phải là tài sản tích lũy đầu tư, nhưng sự trao tặng cho nhau của chúng ta sẽ giúp Lotus tăng trưởng cà về số lượng và chất lượng.', 
            },
          },
          before_carousel_1:
            'Lotus mới được phát hành thông qua phần thưởng được trao cho các thợ đào và các dự án mang lại lợi ích cộng đồng như biểu tượng của sự tri ân.',
          before_carousel_2:
            "Bất cứ khi nào sử dụng Lotus nhằm tri ân bạn bè, bạn nên biết rằng bạn đang hỗ trợ cho những dự án tuyệt vời này.", 
       subscribe: {
          caption: 'Đăng ký',
          text: 'Tham gia nhận tin từ danh mục cộng đồng để nhận những tin tức mới nhất',
        },
          banner: {
            caption:
              'Khi bạn cho và nhận Lotus, bạn đang hỗ trợ cộng đồng và gia tăng giá trị cho nền kinh tế thế giới.', 
            text: 'Khi sử dụng Lotus, bạn có thể hỗ trợ cho những chương trình sau: ',
            initiatives: [
              'Quyền con người',
              'Năng lượng tái tạo',
              'Quyền riêng tư số',
              'Nông nghiệp bền vững',
              'Phần mềm mã nguồn mở',
              'Cứu trợ nhân đạo và từ thiện',
            ],
          },
          faq: {
            q1: {
              question: 'Tôi có thể bắt đầu đào như thế nào?',
              answer:
                'Bạn cần chạy Node Lotus trên máy tính của mình. Bạn có thể xem chỉ dẫn tại <a href="https://docs.givelotus.org/guides/mining" target="_blank"> here</a>. Để kiểm tra hashrate và phần thưởng tương xứng, hãy kiểm tra <a href="/calculator" target="_blank">rewards calculator</a>.',
            },
            q2: {
              question: 'Ví sẵn có là gì?',
              answer:
                'Nếu bạn sử dụng trình duyệt thì <a href="https://sendlotus.com" target="_blank">SendLotus.com</a> có thể sử dụng bất cứ khi nào. Hoặc đối với thiết bị di động của bạn, bạn có thể sử dụng Lotus Vase trên <a href="https://play.google.com/store/apps/details?id=org.cashweb.cashew" target="_blank"> Android</a> và <a href="https://apps.apple.com/us/app/cashew-wallet/id1539306720" target="_blank">iPhone</a>. Bạn cũng có thể chạy Lotus Node light cho <a href="https://storage.googleapis.com/lotus-project/lotus-3.3.3-win64-setup-unsigned.exe" target="_blank">Windows</a>, <a href="https://storage.googleapis.com/lotus-project/lotus-3.3.3-osx-unsigned.dmg" target="_blank">MacOS</a> và <a href="https://storage.googleapis.com/lotus-project/lotus-3.3.3-x86_64-linux-gnu.tar.gz" target="_blank">Linux</a>. ',
            },
            q3: {
              question: 'Làm sao để tôi có được Lotus?',
              answer:
                'Bạn có thể dùng <a href="https://faucet.lotuslounge.org/" target="_blank">faucet</a>. Hoặc bạn có thể nhận quà từ <a href="https://t.me/givelotus" target="_blank">telegram group</a>. Bạn cũng có thể giao dịch những đồng tiền khác thành LOTUS [XPI] trên trang <a href="https://www.exbitron.com/" target="_blank">Exbitron exchange</a>.',
            },
            q4: {
              question: 'Tôi có thể giao dịch ở đâu?',
              answer:
                'Bạn có thể giao dịch trên Exbitron <a href="https://www.exbitron.com/trading/xpiusdt" target="_blank">USDT</a>, <a href="https://www.exbitron.com/trading/xpidoge" target="_blank">Dogecoin</a> và <a href="https://www.exbitron.com/trading/xpibch" target="_blank">Bitcoin Cash</a>',
            },
            q5: {
              question: 'Tôi có thể đóng góp cho dự án như thế nào?',
              answer:
                'Hãy tham khảo mã nguồn mở của chúng tôi <a href="https://github.com/LogosFoundation" target="_blank">here</a> và đừng ngại liên hệ với các lập trình viên trên <a href="https://t.me/givelotus" target="_blank">telegram group</a>.',
            },
            q6: {
              question:
                ' Có bất kỳ hướng dẫn quảng bá thương hiệu cùng với logo và hình ảnh nào mà tôi có thể sử dụng không?',
              answer:
                'Bạn có thể tải về tại <a href="https://storage.googleapis.com/lotus-project/Lotus%20Branding.zip" target="_blank">here</a>',
            },
          },
          header_language: 'Ngôn ngữ',
          header_theme: 'Giao diện',
          header_dark: 'Tối',
          header_light: 'Sáng',
          header_about: “Về chúng tôi',
          header_projects: 'Các dự án',
          header_carousel: ‘Các dự án',
          header_faq: 'Câu hỏi thường gặp',
          header_contact: 'Liên hệ',
          header_block_explorer: 'Kiểm tra lịch sử giao dịch khối',
          documentation: 'Các tài liệu',
          banner_title: '',
          banner_titlestrong: 'Đồng Token của sự tri ân',
          banner_subtitle:
            'Lotus của sự tri ân, là một token kỹ thuật số vô cùng giá trị khiến bạn luôn muốn nắm giữ.',
          faq_subtitle:
            'Bạn có thắc mắc? Hãy xem các câu hỏi thường gặp của chúng tôi để tìm câu trả lời ',
          news_readmore: 'Đọc thêm',
          stampchat_desc:
            ' StampChat là một trình nhắn tin được mã hóa đầu cuối phi tập trung, sử dụng Lotus token để đảm bảo tất cả tin nhắn bạn nhận được đều có giá trị. Điều này cho phép bạn lọc những tin nhắn rác trên nền tảng mà không cần người điều hành tập trung. Sự giao tiếp là phi tập trung, bảo mật và không bị kiểm duyệt',
          becash_desc:
            'Be.cash hợp tác với Logos Foundation để hỗ trợ phát triển phần mềm chuỗi khối Lotus, cũng như phát triển hệ thống Điểm bán hàng và phương thức thanh toán di động cho các kh u vực không có cơ sở hạ tầng thiết yếu phục vụ các phương thức thanh toán truyền thống.',
          bitcoin_abc_desc:
            ' ABC Bitcoin phát triển phần mềm mã nguồn mở có khả năng mở rộng cao để đào và giao dịch crypto token. ABC Bitcoin không hề tính phí, cho phép Lotus sử dụng phần mềm của mình làm cơ sở trong hệ thống và để đáp lại, ABC Bitcoin sẽ nhận được sự tri ân dành cho những nhà phát triển này. ',
          services_button: 'Khám phá',
        },
     })
   })
}