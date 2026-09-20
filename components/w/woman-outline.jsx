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
		"content": `<style>.farm3rbls {
  fill: currentColor;
  d: path("M10.154 21.5v-6.115h-2.77l2.822-7.108q.23-.554.716-.877t1.083-.323t1.08.324q.481.324.711.88l2.82 7.104h-2.77V21.5zm.655-16.193q-.501-.501-.501-1.192q0-.69.5-1.191q.502-.501 1.192-.501t1.191.501t.501 1.192t-.5 1.19q-.502.502-1.192.502t-1.191-.501");
}
</style><path class="farm3rbls"/>`,
		"fallback": "material-symbols-light:woman-outline",
	});
}

export default Component;
