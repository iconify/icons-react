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
		"content": `<style>.bbwa2whvr {
  fill: currentColor;
  d: path("m20.806 21.5l-4.19-4.196l-3.435 3.435l-3.648-3.654l1.38-1.362l-1.823-1.829l-1.386 1.368l-3.629-3.635l1.362-1.38L2.9 7.71l2.067-2.048L2.5 3.189l.708-.689L5.68 4.973l2.048-2.086l2.537 2.575l1.386-1.387L15.28 7.71l-1.362 1.386l1.823 1.823l1.368-1.386l3.648 3.654l-3.43 3.429l4.166 4.17z");
}
</style><path class="bbwa2whvr"/>`,
		"fallback": "material-symbols-light:yakitori-sharp",
	});
}

export default Component;
