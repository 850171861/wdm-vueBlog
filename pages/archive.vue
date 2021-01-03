<template>
  <div class="archives">
    <div class="archive-title">
      <p class="archive-desc">那些年，那些人，那些事</p>
      <p class="archive-tips">这里共有<span>{{artObj.total}}</span>条线索</p>
    </div>
    <div class="time-list-wrap clearfix"
         v-if="artObj.total > 0">
      <div class="art-list">
        <div v-for="(item,index) in yearList"
             :key="index">
          <a-divider orientation="left">
            YEAR-{{item}}
          </a-divider>
          <ul class="art-list-detail">
            <li class="art-detail-item"
                v-for="(list,listIndex) in list"
                :key="listIndex">
              <span class="date">{{list.cdate}}</span>
              <nuxt-link :to="`/article/${list.id}`"
                         :title="list.artTitle">{{list
              .artTitle}}</nuxt-link><span class="views">
                <svgicon class=""
                         name="view"></svgicon>{{list.pv}}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else
         class="no-data">
      咦，这里的线索不见了～
    </div>
  </div>
</template>

<script>

export default {
  name: 'archives',
  head () {
    return {
      title: '归档'
    }
  },
  data () {
    return {
      actived: 0,
      artObj: {
        total: 20
      },
      yearList: [2020, 2019],
      list: [{ cdate: '2020-2-2', artTitle: '标题', pv: 4 },
      { cdate: '2020-2-2', artTitle: '标题', pv: 4 }]
    }
  },

  mounted () {

  }
}
</script>

<style lang="scss">
.archives {
  background-color: #fff;
  .no-data {
    text-align: center;
    font-size: 13px;
    line-height: 60px;
  }
  .archive-title {
    text-align: center;
    padding: 15px 0;

    .archive-desc {
    }

    .archive-tips {
      padding-top: 8px;
      font-size: 16px;
      color: #999;

      span {
        padding: 0 8px;
        color: orange;
        font-weight: bold;
        font-style: italic;
      }
    }
  }

  .time-list-wrap {
    .art-list {
      padding: 0 15px;
      font-size: 13px;
      .times {
        display: block;
        padding: 10px 0;
        .el-divider__text {
          font-size: 20px;
          font-weight: bold;
        }
      }

      .art-list-detail {
        display: flex;
        flex-direction: column;
        justify-content: center;
        .art-detail-item {
          line-height: 30px;
          list-style: none;
          display: flex;
          align-items: center;
          .date {
            padding-right: 10px;
            display: inline-block;
            width: 88px;
          }
          a {
            color: #666;
          }
          .views {
            margin-left: auto;
            display: flex;
            align-items: center;
            .svg-icon {
              width: 16px;
              height: 16px;
              margin-right: 3px;
            }
          }

          a {
            flex: 1;
            text-decoration: underline;
            transition: all 0.5s;
            &:hover {
              color: #409eff;
              font-weight: bold;
              padding-left: 5px;
            }
          }
        }
      }

      a:target {
        padding-top: 70px;
        margin-top: -60px;
      }
    }

    @media screen and (min-width: 769px) {
      .art-list {
        margin: 0 auto;
        a {
          max-width: 500px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    @media screen and (max-width: 768px) {
      .art-list-detail {
        a {
          display: inline-block;
          width: calc(100% - 96px);
        }
      }
    }
  }
}
</style>
