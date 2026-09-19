import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cu0k1l80c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 20.473L12.832 11.24V5.681c0-.997 1.161-1.544 1.93-.908l7.955 6.578A3.54 3.54 0 0 1 24 14.075zm-1.93 22.755l-7.955-6.579a3.54 3.54 0 0 1-1.283-2.724v-6.398L24 36.76v5.558c0 .997-1.161 1.544-1.93.908M24 32.144L12.832 22.91v-7.006L24 25.138zm-3.199-9.65L24 20.473m-11.168 7.054l3.166-2M24 20.473l11.168-9.234V5.681c0-.997-1.161-1.544-1.93-.908l-7.955 6.578A3.54 3.54 0 0 0 24 14.075zm1.93 22.755l7.955-6.579a3.54 3.54 0 0 0 1.283-2.724v-6.398L24 36.76v5.558c0 .997 1.161 1.544 1.93.908");
}

.nbb8ugy1c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.168 15.904L24 25.138v7.006l11.168-9.234m-8.197-4.893v4.63m0 7.04v4.617");
}

.oya63tz8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.964 20.793l.36-.299a2.33 2.33 0 0 0 .844-1.791v-7.464m-1.204 9.554l.215.015c.5-.133.99.243.99.76v5.959");
}
</style><path class="cu0k1l80c"/><path class="nbb8ugy1c"/><path class="oya63tz8g"/>`,
		"fallback": "arcticons:ziraat-mobile",
	});
}

export default Component;
