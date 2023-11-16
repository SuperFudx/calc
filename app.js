document.addEventListener('DOMContentLoaded', function () {
    const eventContainer = document.getElementById('event-container');

    // 获取当天日期
    const today = new Date();

    // 获取月份和日期
    const month = today.getMonth() + 1; // 月份是从0开始计数的，所以要加1
    const day = today.getDate();

    // 计算月份和日期的和
    const sumOfMonthAndDay = month + day;

    // 输出当天日期和和
    console.log(`今天是 ${month} 月 ${day} 日，月和日的和为 ${sumOfMonthAndDay}`);

    // 示例事件数据
    const events = [
        { timestamp: `${today.getFullYear()}-11-16 12:00:00`, description: '事件1' },
        { timestamp: `${today.getFullYear()}-11-16 14:30:00`, description: '事件2' },
        // 添加更多事件...
    ];

    // 在页面上显示事件
    function displayEvents() {
        eventContainer.innerHTML = '';
        events.forEach(event => {
            const eventElement = document.createElement('div');
            eventElement.innerHTML = `<p>${event.timestamp}: ${event.description}</p>`;
            eventContainer.appendChild(eventElement);
        });
    }

    // 初始化时显示事件
    displayEvents();
});
