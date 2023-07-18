<template>
    <div id="sidebar">
        <div id="sidebar_sub">
            <button v-for="(item, index) in icons" :key="index" :id="'icon-' + index" class="custom-icon"
                @click="toggleContainer(index)" @mouseenter="toggleText(index, true)" @mouseleave="toggleText(index, false)"
                :class="{ hover: activeButtons[index], 'clicked': clickedButton === index }">
                <font-awesome-icon :icon="item" />
                <span v-if="activeButtons[index]">{{ hoverText(index) }}</span>
            </button>
        </div>
    </div>

    <div id="filter-container" class="sidebar_container" :class="{ active: filterContainerVisible }">
        <h1>원하시는 필터요소를 선택해주세요</h1>

        <div id="filter-menu" v-show="filterMenuVisible">
            <button v-for="(menu, index) in filterMenus" :key="index" class="sch-menu" :value="menu.value"
                @click="toggleSubMenu(menu.value)">
                <font-awesome-icon :icon="[menu.iconPrefix, menu.iconName]" />
                <br>
                {{ menu.label }}
            </button>
        </div>

        <div id="filter-sub" v-show="subMenuVisible !== null">
            <div v-for="(subMenu, index) in filteredSubMenus" :key="index" :id="subMenu.name" class="filter_BOX"
                v-show="subMenuVisible === subMenu.name">
                <button v-for="(button, buttonIndex) in subMenu.buttons" :key="buttonIndex" class="selected_bt"
                    :value="button.value">
                    <i v-if="button.icon" :class="button.icon"></i>{{ button.label }}
                </button>

                <button style="width: 100px; height:100px" class="back" @click="toggleSubMenu(null)">
                    <i class="fa-solid fa-x"></i>
                </button>
            </div>
        </div>
    </div>


    <div id="searchAndschoollist_container" class="sidebar_container"
        :class="{ active: searchAndschoollistContainerVisible }">
        <div id="search_container">
            <input type="text" id="search" placeholder="학교 이름을 검색해보세요">
        </div>
        <div id="school_list-container"></div>

    </div>
</template>
  
<script>


export default {
    name: 'SiBal',
    data() {
        return {
            // 사이드바 아이콘
            icons: [
                ['fas', 'filter'],
                ['fas', 'list-ul'],
                ['fas', 'paper-plane'],
                ['fas', 'street-view']
            ],
            activeButtons: [false, false, false, false],
            filterMenus: [
                { label: '학교 종류', value: '종류', iconPrefix: 'fas', iconName: 'school' },
                { label: '학교 성별', value: '성별', iconPrefix: 'fas', iconName: 'venus-mars' },
                { label: '학교 지역', value: '지역', iconPrefix: 'fas', iconName: 'location-dot' },
                { label: '학교 국공사', value: '국공사', iconPrefix: 'fas', iconName: 'graduation-cap' }
            ],
            subMenus: [
                {
                    name: '종류',
                    buttons: [
                        { label: '일반고', value: '일반고' },
                        { label: '자율고', value: '자율고' },
                        { label: '특성화고', value: '특성화고' },
                        { label: '특목고', value: '특목고' }
                    ]
                },
                {
                    name: '성별',
                    buttons: [
                        { label: '남고', value: '남고', icon: 'fa-solid fa-person' },
                        { label: '여고', value: '여고', icon: 'fa-solid fa-person' },
                        { label: '남녀공학', value: '남녀공학', icon: 'fa-solid fa-person' }
                    ]
                },
                {
                    name: '지역',
                    buttons: [
                        { label: '지역' },
                        { label: '지역' },
                        { label: '지역' }
                    ]
                },
                {
                    name: '국공사',
                    buttons: [
                        { label: '국립', value: '국립' },
                        { label: '공립', value: '공립' },
                        { label: '사립', value: '사립' }
                    ]
                }
            ],
            filterMenuVisible: true,
            subMenuVisible: null,
            clickedButton: null,
            filterContainerVisible: false,
            searchAndschoollistContainerVisible: false,
        };
    },
    computed: {
        filteredSubMenus() {
            return this.subMenus.filter(subMenu => subMenu.name === this.subMenuVisible);
        },
        hoverText() {
            const hoverTexts = ['필터', '학교 검색', '미야오옹', '내 주변 학교'];
            return index => hoverTexts[index];
        }
    },
    methods: {
        toggleText(index, shouldShow) {
            this.activeButtons[index] = shouldShow;
            this.activeButtons = [...this.activeButtons];
        },
        toggleSubMenu(menuName) {
            if (menuName !== null && menuName !== this.subMenuVisible) {
                this.subMenuVisible = menuName;
                this.filterMenuVisible = false;
            } else {
                this.subMenuVisible = null;
                this.filterMenuVisible = true;
            }
        },
        toggleContainer(index) {
            if (index === 0) {
                this.filterContainerVisible = !this.filterContainerVisible;
                this.searchAndschoollistContainerVisible = false;
            } else if (index === 1) {
                this.searchAndschoollistContainerVisible = !this.searchAndschoollistContainerVisible;
                this.filterContainerVisible = false;
            }

            if (this.clickedButton === index) {
                this.clickedButton = null;
            } else {
                this.clickedButton = index;
            }

            this.activeButtons = this.activeButtons.map((value, i) => i === index);
        }

    }
};



</script>



<style scoped>
* {
    flex-shrink: 0;
}

#sidebar {
    position: relative;
    left: 10px;
    top: 5px;
    width: 90px;
    height: 1890px;
    background-color: #F5EFE7;
    /* background-image: linear-gradient(to bottom, #F5EFE7 0%, #2F4858 100%); */

    z-index: 100;
    transition: .2s;
    border-radius: 20px;

    box-shadow: 0 0 8px 2px #2135551d;
}

#sidebar_sub {
    width: 90px;

    height: 370px;
    position: fixed;
}

.custom-icon {
    width: 60px;
    height: 60px;
    transform: translate(-50%);
    left: 50%;
    color: #4F709C;
    border: none;
    background: none;

    margin-top: 20px;

    border-radius: 10px;
    transition: .2s;
    cursor: pointer;
    position: relative;
    font-size: 30px;
    top: 20px;
}

/* .custom-icon:hover {
    background-color: #D8C4B6;
} */

.custom-icon.clicked {
    background-color: #D8C4B6;
    transform: translate(-50%) scale(1.1);

}







/* ❤️❤️❤️❤️ 사이드바 버튼 호버시 말풍선 ❤️❤️❤️❤️ */

#sidebar span {
    position: absolute;
    width: 150px;
    line-height: 40px;
    left: 90px;
    top: 50%;
    transform: translate(0, -50%);
    background: #4F709C;
    color: white;
    border-radius: 5px;
    font-size: 17px;
    box-shadow: 0 0 8px #21355576;
    animation: mal 0.2s ease;
}


@keyframes mal {
    0% {
        transform: translate(0, -50%) scale(0.4);
    }

    100% {
        transform: translate(0, -50%) scale(1);
    }
}


#sidebar span::after {
    border-top: 10px solid transparent;
    border-left: 10px solid transparent;
    border-right: 12px solid #4F709C;
    border-bottom: 10px solid transparent;
    content: "";
    position: absolute;
    right: 99%;
    top: 10px;
}



/* ❤️❤️❤️❤️ 사이드바 버튼 누를 시 컨테이너 ❤️❤️❤️❤️ */
.sidebar_container {
    width: 500px;
    height: 1890px;

    background-color: #D8C4B6;
    position: absolute;

    border-radius: 20px;

    left: -100vh;
    top: 5px;
    z-index: 90;
    transition: .4s;

    box-shadow: 0 0 8px 2px #F5EFE7;
}

.sidebar_container.active {
    left: 110px;
}



/* ━━━━━━━━━━━━━━━━━━━━━━━ 사이드 바 첫번째 부분 ━━━━━━━━━━━━━━━━━━━━━━━┓ */




/* -- 제목 --  */

#filter-container>h1 {
    color: #252525;
    text-align: center;
    margin-top: 50px;
}


/* 1. 첫번째 메뉴 */

#filter-container>#filter-menu {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 100px;
}

#filter-container>#filter-menu>button {
    font-size: 30px;
    cursor: pointer;
    padding: 10px;
    margin: 10px 60px 5px 60px;
    border-radius: 5px;
    transition: .2s;
}

#filter-container>#filter-menu>button:hover {
    color: #4F709C;
    background: #252525;

    transform: scale(1.1);
}


/* 2. 두번째 메뉴 */

#filter-sub {
    position: relative;
    top: 100px;
    width: 100%;
    height: 40%;
}


#filter-container>.filter_BOX {
    display: flex;
    background-color: #4F709C;
}

.filter_BOX button {
    display: block;
    width: 90%;
    font-size: 30px;
    cursor: pointer;
    padding: 10px;
    margin: 10px auto 0 auto;
    border-radius: 5px;
    transition: .2s;
}

.filter_BOX button:hover {
    transform: scale(1.1);
}

.filter_BOX>button:hover {
    color: #4F709C;
    background: #252525;
}

.filter_BOX>button.selected {
    background-color: #252525;
    color: #4F709C;
}


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ */


/* ❤️❤️❤️❤️ 학교 검색 / 리스트 ❤️❤️❤️❤️ */




#searchAndschoollist_container {
    height: 820px;
    box-shadow: none;
    background: none;


}

#searchAndschoollist_container>#search_container {
    height: 100px;
    position: relative;
    border-radius: inherit;
    background-color: #D8C4B6;
    box-shadow: 0 0 8px 2px #F5EFE7;
}

#searchAndschoollist_container>#search_container input {
    width: 95%;
    position: absolute;
    background: none;
    font-size: 17px;
    padding-left: 10px;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    line-height: 70px;
    border: none;
    border-radius: inherit;
}


#searchAndschoollist_container>#school_list-container {
    margin-top: 20px;
    height: 700px;
    border-radius: inherit;
    background-color: #D8C4B6;
    box-shadow: 0 0 8px 2px #F5EFE7;
}

.filter-button {
    font-size: 20px;
    cursor: pointer;
    transition: .4s;
}

.filter-button:hover {
    font-size: 25px;
    color: white;
}

#school_list-container::-webkit-scrollbar {
    width: 8px;
    /* 스크롤바의 너비 */
}

#school_list-container::-webkit-scrollbar-thumb {
    height: 10%;
    /* 스크롤바의 길이 */
    background: #217af4;
    /* 스크롤바의 색상 */
    border-radius: 10px;
}

table {
    width: 90%;
    height: 300px;
    overflow: hidden;
    border-collapse: collapse;
    text-align: center;
    margin: 0 auto;
    font-size: 18px;

}

table tr {
    width: 900px;

}


table td {
    padding: 20px;
    cursor: pointer;
    transition: .5s;
    border-radius: 10px;
    color: #000000;

}



table td:hover {
    transition: .5s;

    animation: shadow-drop-tb 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}


@keyframes shadow-drop-tb {
    0% {
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
    }

    100% {
        box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35), 0 12px 20px -12px rgba(0, 0, 0, 0.35);
    }
}
</style>
  