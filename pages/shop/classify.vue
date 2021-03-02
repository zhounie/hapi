<template>
    <div>
        <ul>
            <li v-for="(item, index) in list" :key="index" class="bg-white p-1 m-1 rounded-sm">
                <div class="flex justify-between items-center">
                    <h5 class="text-sm font-bold">{{item.name}}</h5>
                    <van-icon name="arrow" size="14px" />
                </div>
                <ul v-if="item.child && item.child.length" class="pt-1 grid gap-1 grid-cols-2">
                    <li v-for="(child) in item.child" :key="child.name" class="bg-gray-200 p-1 rounded-sm">
                        <h6 class="text-xs">{{child.name}}</h6>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    name: '热门',
                },
                {
                    name: '手机配件',
                    child: [
                        { name: '充电器' },
                        { name: '数据线' },
                        { name: '充电宝' },
                        { name: '耳机' },
                        { name: '耳机2' },
                        { name: '耳机3' },
                        { name: '耳机4' },
                        { name: '耳机5' },
                        { name: '耳机6' },
                        { name: '耳机7' },
                        { name: '耳机8' },
                        { name: '耳机9' },
                        { name: '耳机10' },
                    ]
                },
                {
                    name: '网络产品',
                    child: [
                        { name: '路由器' },
                        { name: '网络盒子' },
                    ]
                }
            ]
        }
    }
}
</script>