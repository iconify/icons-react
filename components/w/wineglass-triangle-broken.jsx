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
		"content": `<style>.t1iss4-fm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 14.5714L20.5162 5.86382C21.5624 4.79409 20.7999 3 19.2991 3H14M12 14.5714L3.48381 5.86382C2.43759 4.79409 3.20008 3 4.70095 3H10M12 14.5714V21M12 21H16.2439M12 21H7.7561M7.47318 9.75H16.5268");
}
</style><path class="t1iss4-fm"/>`,
		"fallback": "solar:wineglass-triangle-broken",
	});
}

export default Component;
