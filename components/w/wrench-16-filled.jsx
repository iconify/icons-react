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
		"content": `<style>.q8cufevbi {
  fill: currentColor;
  d: path("M11 1a4 4 0 0 0-3.896 4.91l-5.051 5.235a1.986 1.986 0 0 0 2.842 2.774l5.007-5.072a4.002 4.002 0 0 0 5.062-4.382a.5.5 0 0 0-.85-.287L12 6.293L9.707 4l2.115-2.115a.5.5 0 0 0-.287-.85A4 4 0 0 0 10.999 1");
}
</style><path class="q8cufevbi"/>`,
		"fallback": "fluent:wrench-16-filled",
	});
}

export default Component;
