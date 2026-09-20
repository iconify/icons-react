import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkyxzwb9q.css';
import '../../css/g/gslr97yjg.css';
import '../../css/e/ec1sk488t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xkyxzwb9q"><path class="gslr97yjg"/><path class="ec1sk488t"/></g>`,
		"fallback": "streamline-color:zodiac-6",
	});
}

export default Component;
