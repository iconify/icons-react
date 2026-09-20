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
		"content": `<style>.va52lqbjn {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M12 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9a9 9 0 0 0-9 9a9 9 0 0 0 9 9m6.063-6.03c.289-.588-.107-1.246-.746-1.39c-.579-.129-1.147.217-1.452.726a4.5 4.5 0 1 1-.182-4.892c.363.514 1.016.82 1.6.585c.568-.228.855-.876.546-1.404A6.75 6.75 0 0 0 12 5.25a6.75 6.75 0 1 0 6.064 9.72");
}
</style><path clip-rule="evenodd" class="va52lqbjn"/>`,
		"fallback": "token-branded:xcur",
	});
}

export default Component;
