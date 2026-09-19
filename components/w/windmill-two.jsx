import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p00jiub_r.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGlzn6oczD"><path class="p00jiub_r"/></mask></defs><path mask="url(#SVGlzn6oczD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:windmill-two",
	});
}

export default Component;
