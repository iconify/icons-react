import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdaxo33rn.css';
import '../../css/s/s1wngpzxq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdaxo33rn"/><path class="s1wngpzxq"/>`,
		"fallback": "selfhst:yundera-dark",
	});
}

export default Component;
