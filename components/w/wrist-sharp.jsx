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
		"content": `<style>.nlizunuhb {
  fill: currentColor;
  d: path("M11.192 20.708L6.485 16H1.692V8h4.293l1.988-2h11.335v1h-5v2.173h7v1h-7v2.154h8v1h-8V15.5h6v1H11.51l1.279 2.533z");
}
</style><path class="nlizunuhb"/>`,
		"fallback": "material-symbols-light:wrist-sharp",
	});
}

export default Component;
