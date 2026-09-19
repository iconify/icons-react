import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0v79xv_p.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGOLMCCemi"><path class="y0v79xv_p"/></mask></defs><path mask="url(#SVGOLMCCemi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:yep",
	});
}

export default Component;
