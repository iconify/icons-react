import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/m/mexdldrmp.css';
import '../../css/r/r0xlvib1h.css';
import '../../css/v/v9-8lib4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="mexdldrmp"/><path class="r0xlvib1h"/><path class="v9-8lib4s"/></g>`,
		"fallback": "streamline-logos:whitesource-logo-3",
	});
}

export default Component;
