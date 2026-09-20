import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/s/sm2sega2i.css';
import '../../css/o/oate0sbjl.css';
import '../../css/d/dnhlc8baf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="sm2sega2i"/><path class="oate0sbjl"/><path class="dnhlc8baf"/></g>`,
		"fallback": "streamline-sharp-color:wrap-arch",
	});
}

export default Component;
