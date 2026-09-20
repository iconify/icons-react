import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/h/h0086jb6j.css';
import '../../css/j/jelje5b3c.css';
import '../../css/m/mc88p7b3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="h0086jb6j"/><path class="jelje5b3c"/><path class="mc88p7b3c"/></g>`,
		"fallback": "streamline-sharp-color:wine",
	});
}

export default Component;
