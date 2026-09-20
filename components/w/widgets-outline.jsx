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
		"content": `<style>.growmobnj {
  fill: currentColor;
  d: path("M16.65 13L11 7.35l5.65-5.65l5.65 5.65zM3 11V3h8v8zm10 10v-8h8v8zM3 21v-8h8v8zM5 9h4V5H5zm11.675 1.2L19.5 7.375L16.675 4.55L13.85 7.375zM15 19h4v-4h-4zM5 19h4v-4H5zm10-4");
}
</style><path class="growmobnj"/>`,
		"fallback": "material-symbols:widgets-outline",
	});
}

export default Component;
