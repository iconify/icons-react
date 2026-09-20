import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b4gsipbya {
  fill: currentColor;
  d: path("M7 5a4 4 0 0 1 5.445-3.73a.5.5 0 0 1 .173.819L10.707 4L12 5.293l1.91-1.91a.5.5 0 0 1 .82.172a4 4 0 0 1-4.829 5.292L4.896 13.92a1.986 1.986 0 0 1-2.842-2.774l5.05-5.234A4 4 0 0 1 7 5m4-3a3 3 0 0 0-2.862 3.903a.5.5 0 0 1-.117.498L2.773 11.84a.986.986 0 0 0 1.41 1.377l5.225-5.293a.5.5 0 0 1 .532-.116a3 3 0 0 0 4.046-3.088l-1.633 1.634a.5.5 0 0 1-.707 0l-2-2a.5.5 0 0 1 0-.707l1.634-1.634A3 3 0 0 0 11 2");
}
</style><path class="b4gsipbya"/>`,
		"fallback": "fluent:wrench-16-regular",
	});
}

export default Component;
