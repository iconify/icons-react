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
		"content": `<style>.ibyu_vyyk {
  d: path("M5.5 8.99997C5.5 8.99997 7.58115 8.08724 9 7.99997C11.4652 7.84835 12.5348 10.1516 15 9.99997C16.4188 9.91271 18.5 8.99997 18.5 8.99997");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kvwd90-nm {
  d: path("M12 15.2856V20.9999");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.nycani22t {
  d: path("M15.75 20.9999H12H8.25M5 4.89474C5 3.8483 5.8483 3 6.89474 3H17.1053C18.1517 3 19 3.8483 19 4.89474V8C19 11.866 15.866 15 12 15C8.13401 15 5 11.866 5 8V4.89474Z");
}
</style><g class="ipq1z-bjh"><path class="nycani22t"/><path class="kvwd90-nm"/><path class="ibyu_vyyk"/></g>`,
		"fallback": "solar:wineglass-line-duotone",
	});
}

export default Component;
