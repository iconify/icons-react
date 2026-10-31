import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b259x8beh.css';
import '../../css/w/w-5mz7bdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b259x8beh"/><path class="w-5mz7bdz"/></g>`,
		"fallback": "coolicons:zodiac-leo-duocolor-round",
	});
}

export default Component;
