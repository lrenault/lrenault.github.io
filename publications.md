---
layout: page
title: Publications
---
All my publications can also be viewed on my [Google Scholar profile](https://scholar.google.com/citations?user=4987Pm4AAAAJ).


<!-- POSEFIX -->
<div id="posefix_iccv23" class="paper">
    <div class="paper-thumbnails">
        <img src="images/PoseFix_thumbnails.png">
    </div>
    <div class="paper-info">
        <span class="paper-status-chip">ICCV 2023</span>
        <p class="paper-title">PoseFix: Correcting 3D Human Poses with Natural Language</p>
        <p class="paper-authors">Ginger Delmas, Philippe Weinzaepfel, Francesc Moreno-Noguer, Grégory Rogez</p>
        <!-- <p class="paper-status">International Conference on Computer Vision (ICCV 2023)</p> -->
        <div class="paper-data">
            <!-- <a class="paper-data-item" onclick='know_more(this)'>&#128064; What ?</a> -->
            <a class="paper-data-item" href="https://arxiv.org/pdf/2309.08480.pdf" target="_blank" rel="noopener noreferrer"></i><i class="far fa-file-pdf"></i> Paper</a>
            <a class="paper-data-item" href="https://europe.naverlabs.com/research/computer-vision/posefix/" target="_blank" rel="noopener noreferrer">&#127760; Webpage</a>
            <a class="paper-data-item" href="https://github.com/naver/posescript" target="_blank" rel="noopener noreferrer"><i class="fa fa-code"></i> Code</a>
            <a class="paper-data-item" href="https://europe.naverlabs.com/wp-content/uploads/2023/09/ICCV23_poster_10123_compressed.pdf" target="_blank" rel="noopener noreferrer"><i class="fas fa-panorama"></i> Poster</a>
            <a class="paper-data-item" onclick='copy_bibtext(this)'>&#128278; BibTex</a>
            <a class="paper-data-item" href="https://download.europe.naverlabs.com/ComputerVision/PoseFix/posefix_dataset_release.zip" target="_blank" rel="noopener noreferrer"><i class="fa fa-database"></i> Data</a>
        </div>
        <p id="posefix_iccv23_descr" class="paper-small-descr">We introduce the PoseFix dataset, which consists in over 6k triplets of 3D human pose pairs and a text modifier describing how the source pose needs to be modified to obtain the target pose. We further train a text-based pose editing model to generate corrected 3D body poses given a query pose and a text modifier; and a correctional text generation model, where correctional instructions are generated based on the differences between two body poses.</p>
        <div id="posefix_iccv23_bibtex" style="display: none;">
            @inproceedings{delmas2023posefix,
                title={{PoseFix: Correcting 3D Human Poses with Natural Language}},
                author={{Delmas, Ginger and Weinzaepfel, Philippe and Moreno-Noguer, Francesc and Rogez, Gr\'egory}},
                booktitle={{ICCV}},
                year={2023}
            }
        </div>
    </div>
</div>