import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_f7a-bya.css';
import '../../css/f/fyzd6vw5z.css';
import '../../css/r/r16hmzbjt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e_f7a-bya"/><path clip-rule="evenodd" class="fyzd6vw5z"/><path clip-rule="evenodd" class="r16hmzbjt"/>`,
		"fallback": "ion:wifi-sharp",
	});
}

export default Component;
