import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bi9ermbmx.css';
import '../../css/s/sudo-1bgw.css';
import '../../css/o/osxy73eeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="bi9ermbmx"/><path class="sudo-1bgw"/><path class="osxy73eeo"/></g>`,
		"fallback": "keyline-icons:wifi-x-sharp-two-tone",
	});
}

export default Component;
