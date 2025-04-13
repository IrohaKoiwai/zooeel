// 行程数据
const itinerary = [
    {
        day: 1,
        date: '2025年5月1日',
        title: '抵达新加坡',
        activities: [
            '下午抵达樟宜机场',
            '入住金沙酒店',
            '滨海湾花园夜景'
        ],
        transport: 'airplane',
        weather: 'sunny'
    },
    {
        day: 2,
        date: '2025年5月2日',
        title: '圣淘沙岛探索',
        activities: [
            '环球影城游玩',
            'S.E.A.海洋馆',
            '圣淘沙海滩日落'
        ],
        transport: 'subway',
        weather: 'sunny'
    },
    {
        day: 3,
        date: '2025年5月3日',
        title: '市区文化之旅',
        activities: [
            '鱼尾狮公园',
            '牛车水唐人街',
            '小印度区'
        ],
        transport: 'bus',
        weather: 'cloudy'
    },
    {
        day: 4,
        date: '2025年5月4日',
        title: '动物园与河川生态园',
        activities: [
            '新加坡动物园',
            '河川生态园',
            '夜间动物园'
        ],
        transport: 'bus',
        weather: 'rainy'
    },
    {
        day: 5,
        date: '2025年5月5日',
        title: '购物与美食',
        activities: [
            '乌节路购物',
            '克拉码头美食',
            '金沙购物中心'
        ],
        transport: 'subway',
        weather: 'sunny'
    },
    {
        day: 6,
        date: '2025年5月6日',
        title: '滨海湾探索',
        activities: [
            '滨海湾金沙空中花园',
            '艺术科学博物馆',
            '滨海湾花园'
        ],
        transport: 'walking',
        weather: 'sunny'
    },
    {
        day: 7,
        date: '2025年5月7日',
        title: '返程',
        activities: [
            '酒店退房',
            '樟宜机场购物',
            '返回温暖的家'
        ],
        transport: 'airplane',
        weather: 'sunny'
    }
];

// 初始化时间线
function initializeTimeline() {
    const timelineContainer = document.querySelector('.timeline-container');
    
    itinerary.forEach((day, index) => {
        const timelineItem = createTimelineItem(day, index);
        timelineContainer.appendChild(timelineItem);
    });
}

// 创建时间线项目
function createTimelineItem(day, index) {
    const item = document.createElement('div');
    item.className = `timeline-item fade-in ${index % 2 === 0 ? 'left' : 'right'}`;
    
    const transportIcon = getTransportIcon(day.transport);
    const weatherIcon = getWeatherIcon(day.weather);
    
    item.innerHTML = `
        <div class="bg-white p-6 rounded-lg shadow-md">
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold text-[#ED2939]">第${day.day}天：${day.title}</h3>
                <span class="text-sm text-gray-500">${day.date}</span>
            </div>
            <div class="flex items-center mb-4">
                <i class="fas ${transportIcon} mr-2 text-[#4FB5C3]"></i>
                <span class="text-sm">交通方式：${getTransportText(day.transport)}</span>
                <i class="fas ${weatherIcon} ml-4 text-[#4FB5C3]"></i>
                <span class="text-sm ml-2">天气：${getWeatherText(day.weather)}</span>
            </div>
            <ul class="space-y-2">
                ${day.activities.map(activity => `
                    <li class="flex items-center">
                        <i class="fas fa-check-circle mr-2 text-[#4FB5C3]"></i>
                        ${activity}
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
    
    return item;
}

// 获取交通图标
function getTransportIcon(transport) {
    const icons = {
        airplane: 'fa-plane',
        subway: 'fa-subway',
        bus: 'fa-bus',
        walking: 'fa-walking'
    };
    return icons[transport] || 'fa-question-circle';
}

// 获取交通方式文本
function getTransportText(transport) {
    const texts = {
        airplane: '飞机',
        subway: '地铁',
        bus: '公交车',
        walking: '步行'
    };
    return texts[transport] || '其他';
}

// 获取天气图标
function getWeatherIcon(weather) {
    const icons = {
        sunny: 'fa-sun',
        cloudy: 'fa-cloud',
        rainy: 'fa-cloud-rain',
        thunderstorm: 'fa-bolt'
    };
    return icons[weather] || 'fa-cloud';
}

// 获取天气文本
function getWeatherText(weather) {
    const texts = {
        sunny: '晴朗',
        cloudy: '多云',
        rainy: '雨天',
        thunderstorm: '雷雨'
    };
    return texts[weather] || '未知';
}

// 添加滚动动画
function addScrollAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
} 