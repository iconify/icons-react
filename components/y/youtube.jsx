import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3jh1-bnt.css';
import '../../css/d/dblasrb2v.css';
import '../../css/w/wxc7mbbhr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGTk2kDbTG"><g class="q3jh1-bnt"><path class="dblasrb2v"/><path class="wxc7mbbhr"/></g></mask></defs><path mask="url(#SVGTk2kDbTG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:youtube",
	});
}

export default Component;
