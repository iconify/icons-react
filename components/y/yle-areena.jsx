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
		"content": `<style>.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.s2mmz2bmf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.721 29.113l-3.929-9.592m7.485 0l-4.679 13.031C17.225 33.457 16.476 34 15.54 34h-.561m9.639-18v12.282m8.112-1.772c-.48.948-1.596 1.58-2.713 1.58h0c-1.756 0-3.192-1.422-3.192-3.159v-2.053c0-1.737 1.436-3.158 3.192-3.158h0c1.755 0 3.191 1.421 3.191 3.158v1.106h-6.383");
}
</style><path class="s2mmz2bmf"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:yle-areena",
	});
}

export default Component;
