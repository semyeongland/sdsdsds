<template>
    <footer>
        <div class="school-Meals_container School">
            <div class="school-Meals">
                <div style="font-size: 30px;margin: 0 auto;">🍽️ 우리학교의 급식을 확인해보세요!</div>
            </div>
        </div>
        <div class="school-Timetable§Gender_container">
            <div class="school-Timetable School"></div>
            <div class="school-Gender School"></div>
        </div>

    </footer>
</template>

<script>
export default {
    name: "Footer_home"
};
</script>



<style>
footer {
    width: 100%;
    margin-top: 10px;
}

.school-Meals_container {
    display: flex;

}

#ga {
    flex: 0;
    transition: .5s;

}

.school-Meals {
    transition: 1s;
    width: 900px;
    /*가상으로 잡아둠*/

    margin: 10px 20px 10px 20px;

    height: 300px;
    flex: 1.65;

    border-radius: 30px;

    position: relative;

    display: flex;

    justify-content: space-around;
    align-items: center;

    box-shadow: 0 0 8px 2px #D8C4B6;
    background-color: #fff;


}




.Meals_list {

    width: 200px;
    height: 280px;
    border-radius: 20px;

    overflow: hidden;

    border: 2px solid black;

    transform: translate(0, -30px);

    transition: .7s;

    margin: 0 5px 0 5px;

}

.Meals_list h3 {
    position: relative;
    top: 10px;
    text-align: center;
}

.Meals_list ul {
    width: 200px;
    height: 250px;
    margin-bottom: 10px;

}

.Meals_list li {
    overflow-x: hidden;

    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 25px;

}


.Meals_list li::before {
    content: "\00a0💙 ";
}




.school-Timetable§Gender_container {
    display: flex;
}

</style>