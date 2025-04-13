// 使用 Alpine.js 进行状态管理
document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        mobileMenuOpen: false,
        currentWeather: null,
        isLoading: true,

        init() {
            this.fetchWeather();
            this.initializeScrollSpy();
        },

        // 获取天气数据
        async fetchWeather() {
            try {
                // 这里使用模拟数据，实际项目中应该调用天气API
                this.currentWeather = {
                    temperature: 28,
                    condition: 'sunny',
                    humidity: 80,
                    windSpeed: 10
                };
            } catch (error) {
                console.error('获取天气数据失败:', error);
            } finally {
                this.isLoading = false;
            }
        },

        // 初始化滚动监听
        initializeScrollSpy() {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('nav a');

            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (pageYOffset >= sectionTop - 60) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').slice(1) === current) {
                        link.classList.add('active');
                    }
                });
            });
        },

        // 获取天气图标
        getWeatherIcon(condition) {
            const icons = {
                sunny: 'fa-sun',
                cloudy: 'fa-cloud',
                rainy: 'fa-cloud-rain',
                thunderstorm: 'fa-bolt'
            };
            return icons[condition] || 'fa-cloud';
        }
    }));
});

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 添加淡入动画
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });

    // 初始化时间线
    initializeTimeline();
});

// 打印优化
window.addEventListener('beforeprint', () => {
    document.body.classList.add('print-mode');
});

window.addEventListener('afterprint', () => {
    document.body.classList.remove('print-mode');
}); 