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
		"content": `<style>.bvyko6bup {
  fill: currentColor;
  d: path("m19.65 20.196l.546-.546l-1.811-1.811v-2.723h-.77v3.046zM10 7h4V5h-4zm5.165 13.836Q14 19.67 14 18t1.165-2.835T18 14t2.836 1.165T22 18t-1.164 2.836T18 22t-2.835-1.164M3 20V7h6V4h6v3h6v5.814q-.683-.414-1.448-.614T18 12q-2.496 0-4.248 1.752T12 18q0 .506.086 1.009t.262.991z");
}
</style><path class="bvyko6bup"/>`,
		"fallback": "material-symbols-light:work-history-sharp",
	});
}

export default Component;
