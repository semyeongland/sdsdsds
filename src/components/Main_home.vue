<template>
    <div class="main">

        <!-- 🤴🤴🤴 지도부분 🤴🤴🤴 -->
        <div id="school-Map_container" class="Parents_div">
            <!-- 😛😛😛 실제 맵 😛😛😛 -->
            <div id="map"></div>

            <!-- 😛😛😛 맵 버튼 😛😛😛 -->
            <div id="map_bt1" class="map_bt">길찾기</div>
            <div id="map_bt2" class="map_bt">로드뷰</div>
        </div>

        <!-- 🤴🤴🤴 차트 🤴🤴🤴 -->

        <div id="school-Chart" class="Parents_div">
            <div>너비 220, 높이 220</div>
            <div>너비 220, 높이 220</div>
        </div>

        <!-- 🤴🤴🤴 학교정보 🤴🤴🤴 -->

        <div id="school-Data" class="Parents_div">
            <div id="school_name">너비 500, 높이 100</div>
            <div id="school_data">너비 500, 높이 340</div>
        </div>

        <!-- 🤴🤴🤴 급식 🤴🤴🤴 -->

        <div id="school-Meals" class="Parents_div">
            <div id="school-Meals_content_date">
                <div><font-awesome-icon :icon="['fas', 'circle-left']" /></div>
                <div><input type="date"></div>
                <div><font-awesome-icon :icon="['fas', 'circle-right']" /></div>
            </div>
            <div id="school-Meals_content">
                너비 500, 높이 300
            </div>
        </div>

        <!-- 🤴🤴🤴 시간표 🤴🤴🤴 -->

        <div id="school-Timetable"></div>

    </div>
</template>

<script>
export default {
    name: "Main_home"
};
</script>

<style>
/* ❤️💛💚💙💜🤎🖤🤍 모든 자료를 감싸는 부분 ❤️💛💚💙💜🤎🖤🤍 */

.Parents_div {
    border-radius: 20px;
    flex-shrink: 0;

}

.Parents_div>div {
    border-radius: 20px;
}

/* ❤️💛💚💙💜🤎🖤🤍 모든영역을 감싸는 부분 ❤️💛💚💙💜🤎🖤🤍 */

.main {
    width: calc(100%-30px);
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    padding: 20px;
    justify-content: start;
    align-items: start;

    flex-shrink: 0;
    gap: 20px;
}







/* ❤️💛💚💙💜🤎🖤🤍 맵 부분 ❤️💛💚💙💜🤎🖤🤍 */




.main>#school-Map_container {
    max-width: 600px;
    width: max(600px);
    height: 450px;
    position: relative;

    box-shadow: 0 0 8px 2px #2135551d;
}


#map {
    width: inherit;
    height: inherit;
    position: relative;
    z-index: 2;
    background-color: #F5EFE7;
}

/* ❣️❣️ 맵 부분 > 길찾기, 로드뷰 부분 ❣️❣️ */


.map_bt {
    text-align: center;
    width: 70px;
    height: 100px;
    line-height: 40px;
    border-radius: inherit;
    position: absolute;
    top: -35px;
    left: 20px;

    background-color: inherit;
    box-shadow: inherit;
    transition: .3s;
    display: inline-block;
    cursor: pointer;

    z-index: 1;
    background-color: #F5EFE7;
}

.map_bt:hover {
    transform: translate(0, -7px);
}

#map_bt2 {
    margin-left: 75px;
}









/* ❤️💛💚💙💜🤎🖤🤍 성비, (미정) 차트 부분 ❤️💛💚💙💜🤎🖤🤍 */



.main>#school-Chart {
    width: auto;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#school-Chart>div {
    width: 220px;
    height: 220px;

    overflow: hidden;
    box-shadow: 0 0 8px 2px #2135551d;
    background-color: #F5EFE7;
}








/* ❤️💛💚💙💜🤎🖤🤍 학교 데이터 부분 ❤️💛💚💙💜🤎🖤🤍 */

.main>#school-Data {
    width: 500px;
    flex-shrink: 0;
    height: 450px;
    transition: .7s;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

}

/* ❣️❣️ 학교 데이터 부분 > 학교 이름부분 ❣️❣️ */

#school_name {
    width: 500px;
    height: 100px;
    background-color: #F5EFE7;
    box-shadow: 0 0 8px 2px #2135551d;
}

/* ❣️❣️ 학교 데이터 부분 > 학교 데이터부분❣️❣️ */

#school_data {
    width: 500px;
    height: 340px;
    background-color: #F5EFE7;
    box-shadow: 0 0 8px 2px #2135551d;
}




/* ❤️💛💚💙💜🤎🖤🤍 급식 부분 ❤️💛💚💙💜🤎🖤🤍 */

#school-Meals {
    width: 500px;
    height: 450px;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* ❣️❣️ 급식 부분 > 날짜 지정 ❣️❣️ */

#school-Meals_content_date {
    width: 350px;
    height: 50px;
    box-shadow: 0 0 8px 2px #2135551d;
    background-color: #F5EFE7;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    clear: both;
}

#school-Meals_content_date input {
    font-size: 30px;
    border: 0;
    background-color: inherit;
    padding-left: 20px;
    cursor: pointer;
}

#school-Meals_content_date input::-webkit-calendar-picker-indicator:hover {
    cursor: pointer;
    background-color: #F5EFE7;
}



/* ❣️❣️ 급식 부분 > 급식이 표시되는 부분 ❣️❣️ */


#school-Meals_content {
    flex-shrink: 0;
    transition: 1s;
    width: 500px;
    height: 380px;


    position: relative;

    box-shadow: 0 0 8px 2px #2135551d;
    background-color: #F5EFE7;
}
</style>