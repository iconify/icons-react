import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xm6lavbjf {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.875 2.25h-2.25q-1.398 0-2.386.989q-.989.988-.989 2.386v2.25q0 1.398.989 2.386q.988.989 2.386.989h2.25q3.375 0 3.375-3.375v-2.25q0-1.398-.989-2.386q-.988-.989-2.386-.989m4.875 4.5q0-1.864 1.318-3.182T17.25 2.25t3.182 1.318T21.75 6.75t-1.318 3.182t-3.182 1.318t-3.182-1.318T12.75 6.75m-4.875 6h-2.25q-1.398 0-2.386.989q-.989.988-.989 2.386v2.25q0 1.398.989 2.386q.988.989 2.386.989h2.25q3.375 0 3.375-3.375v-2.25q0-3.375-3.375-3.375m8.25 0h2.25q3.375 0 3.375 3.375v2.25q0 3.375-3.375 3.375h-2.25q-3.375 0-3.375-3.375v-2.25q0-3.375 3.375-3.375");
}
</style><path class="xm6lavbjf"/>`,
		"fallback": "uix-solid:widget",
	});
}

export default Component;
