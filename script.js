document.getElementById('giftBox').addEventListener('click', function() {
    const giftBox = document.getElementById('giftBox');
    const videoContainer = document.getElementById('videoContainer');
    const myVideo = document.getElementById('myVideo');

    // Ẩn hộp quà và hiển thị video
    giftBox.style.display = 'none';
    videoContainer.style.display = 'flex';

    // Đặt lại video về đầu
    myVideo.currentTime = 0;  // Đặt thời gian video về 0
    myVideo.volume = 0;       // Bắt đầu với âm thanh bằng 0
    myVideo.play();           // Phát video

    // Tăng dần âm lượng từ giây thứ 0 đến giây thứ 3
    let startVolume = 0;
    const endVolume = 1; // Âm lượng tối đa
    const duration = 3000; // 3000 milliseconds = 3 seconds
    const interval = 50; // Thay đổi âm lượng mỗi 50 milliseconds
    let currentTime = 0;

    const volumeInterval = setInterval(() => {
        currentTime += interval;
        const volume = Math.min(startVolume + (endVolume - startVolume) * (currentTime / duration), endVolume);
        myVideo.volume = volume;

        if (currentTime >= duration) {
            clearInterval(volumeInterval); // Dừng tăng âm lượng sau 3 giây
        }
    }, interval);

    // Khi video kết thúc, ẩn video và hiển thị lại hộp quà
    myVideo.onended = function() {
        videoContainer.style.display = 'none';
        giftBox.style.display = 'block';
    };
});
