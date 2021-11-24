<script setup lang="ts">
import {ArrowDownBold as ElDown} from '@element-plus/icons';
import useTranslation from '../../config/i18n/useTranslation';
import useGlobalLocale from '../../config/i18n/useGlobalLocale';
import {useI18n} from 'vue-i18n';
import {store} from '../../store';

const i18n = useI18n();
const globalLocale = useGlobalLocale();
const message = useTranslation(['locale', 'localeEN', 'localeZH']);
const switchLocale = (locale: string) => {
  i18n.locale.value = locale;
  store.commit('config/setAppLocale', locale);
};
</script>

<template>
  <div
    class="locale-select"
  >
    <p class="current">
      {{ message[`locale${globalLocale}`] }}
    </p>
    <ul>
      <li
        v-for="locale in i18n.availableLocales"
        :key="`locale-${locale}`"
        @click="() => switchLocale(locale)"
      >
        {{ message[`locale${locale.toUpperCase()}`] }}
      </li>
    </ul>
    <ElIcon class="arrow">
      <ElDown />
    </ElIcon>
  </div>
</template>

<style lang="scss" scoped>
@use "src/util/Other";
@use "src/util/Shadow";

$dropdownRadius: 5px;
$duration: 200ms;

@keyframes growDown {
  0% {
    transform: scaleY(0)
  }
  80% {
    transform: scaleY(1.1)
  }
  100% {
    transform: scaleY(1)
  }
}

.locale-select {
  @include Other.center-flex;
  cursor: pointer;
  position: relative;

  &:hover {
    ul {
      animation: growDown $duration ease-in-out forwards;

      li {
        display: block;
      }
    }

    .arrow {
      transform: rotate(-90deg);
    }

  }

  ul {
    all: unset;
    @include Shadow.light;
    position: absolute;
    width: 100%;
    left: 0;
    top: 100%;
    border-radius: $dropdownRadius;
    transform-origin: top center;

    li {
      all: unset;
      padding: 10px;
      display: none;
      background-color: white;

      &:hover {
        background-color: #06aebd;
      }

      &:first-child {
        border-radius: $dropdownRadius $dropdownRadius 0 0;
      }

      &:last-child {
        border-radius: 0 0 $dropdownRadius $dropdownRadius;
      }
    }
  }

  .arrow {
    transition: transform $duration;
  }

  .current {
    padding: 0 10px;
    margin: 10px 0;
  }

}
</style>
