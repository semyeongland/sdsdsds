<template>
    <div class="main">
        <div id="map"></div>

        <div id="chart">
            <div></div>
            <div></div>
        </div>

        <div id="data"></div>
    </div>
</template>

<script>
export default {
    name: "Main_home"
};
</script>

<style>
.main {
    width: 100%;
    height: 450px;
    display: flex;

    margin-top: 30px;
    flex-shrink: 0;
}


.main>#map {
    height: 100%;
    flex: 1.7;
    margin: 0 10px 0 20px;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 0 8px 2px #D8C4B6;
    background-color: #fff;

}

.main>#chart {
    height: 100%;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#chart > div {
    width: 220px;
    height: 220px;
    
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 0 8px 2px #D8C4B6;
    background-color: #fff;
}


.main>#data {
    height: 100%;
    flex: 1;
    border-radius: 20px;
    margin: 0 20px 0 10px;
    transition: .7s;
    position: relative;
    box-shadow: 0 0 8px 2px #D8C4B6;

    background-color: #fff;
}

#더보기 {
    border: none;
    font-size: 20px;
    background: none;
    cursor: pointer;
}

.fa-caret-down {
    width: 20px;
    border-radius: 50%;
    border: 3px solid #0091ff;
    transition: .5s;
    margin-right: 10px;
}



.data-SchoolName {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    /* text-shadow: 0 2px 3px #0091ff; */
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    justify-content: end;
    margin-top: 30px;

}

.data-SchoolName>a {
    color: #000000;
    text-decoration: none;
    line-height: 30px;

}


.data-SchoolName_ENG {
    font-size: 22px;
}


.data-Area,
.data-SchoolType,
.data-Student_num,
.data-Gender,
.data-Number {
    width: 100%-50px;
    height: 60px;
    line-height: 60px;
    font-size: 19px;
    margin: 10px 50px 0 50px;
    border-bottom: #3a3a3a 3px solid;
    color: #3a3a3a;
    transition: .7s;
}

.data-Area span,
.data-SchoolType span,
.data-Student_num span,
.data-Gender span,
.data-Number span {
    color: #000000;
}

/* 지역부분  */
.data-Area>.fa-location-dot::after {
    content: " 위치 : ";
    font-family: "SUITE-Regular";
}

/* 학교종류 하마 부분 */
.data-SchoolType>.fa-hippo::after {
    content: " 종류 : ";
    font-family: "SUITE-Regular";
}

/* 학생수 부분 */
.data-Student_num>.fa-user::after {
    content: " 학생 수 : ";
    font-family: "SUITE-Regular";
}

/*  남녀공학 부분  */
.data-Gender>.fa-venus-mars::after {
    content: " 성별 : ";
    font-family: "SUITE-Regular";
}

/*  전화번호 부분  */
.data-Number>.fa-phone::after {
    content: " 전화번호 : ";
    font-family: "SUITE-Regular";
}

@keyframes fadein {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>