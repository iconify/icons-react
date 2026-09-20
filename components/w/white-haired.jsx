import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lk_ofhc7o {
  fill: var(--svg-color--e1e8ed, #E1E8ED);
  d: path("M4.5 1c-1.567 0-3.061.086-4.5.235v23.416c13.81 13.743 6.846-.189 6.846-.189c4.692 4.692 18.769 4.692 18.769 4.692L29.038 36h5.28c.424-2.252.682-5.332.682-9.192C35 15.077 23.269 1 4.5 1z");
}

.o0qzs8b8b {
  fill: var(--svg-color--ffdc5d, #FFDC5D);
  d: path("M0 21h30v15H0z");
}
</style><path class="o0qzs8b8b"/><path class="lk_ofhc7o"/>`,
		"fallback": "twemoji:white-haired",
	});
}

export default Component;
