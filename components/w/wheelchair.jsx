import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/b/bo0gd_fua.css';
import '../../css/i/itwm8w2av.css';
import '../../css/l/l99dlhbri.css';
import '../../css/w/wmsnpobfq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGKDASGbCp"><g class="aql7dnt-u"><path class="bo0gd_fua"/><path class="itwm8w2av"/><path class="l99dlhbri"/><path class="wmsnpobfq"/></g></mask></defs><path mask="url(#SVGKDASGbCp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:wheelchair",
	});
}

export default Component;
