import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/b/biu1bzdhf.css';
import '../../css/v/vo0qoubty.css';
import '../../css/l/lz7h7hopk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="biu1bzdhf"/><path class="vo0qoubty"/><path class="lz7h7hopk"/></g>`,
		"fallback": "streamline-sharp-color:workspace-desk",
	});
}

export default Component;
