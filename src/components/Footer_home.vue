<template>
    <footer>

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