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

.mvuunccaj {
  cx: 24px;
  cy: 24px;
  r: 3.97px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.v6payvbyv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m10.5 20.189l7.767 7.767m0-7.767L10.5 27.956m19.233-7.767l7.767 7.767m0-7.767l-7.767 7.767");
}
</style><rect class="j3s9ivbxi"/><circle class="mvuunccaj"/><path class="v6payvbyv"/>`,
		"fallback": "arcticons:xox",
	});
}

export default Component;
