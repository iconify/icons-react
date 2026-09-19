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
		"content": `<style>.l-l1v-beh {
  width: 39px;
  height: 26px;
  x: 4.5px;
  y: 9px;
  rx: 2px;
  ry: 2px;
}

.l4sgg6xgw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.86 22l-9.72-5.596v11.192z");
}

.x9rx5gtxs {
  d: path("M12 39h24");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="x9rx5gtxs"/><rect class="l-l1v-beh"/></g><path class="l4sgg6xgw"/>`,
		"fallback": "arcticons:youtube-tv",
	});
}

export default Component;
