import { useEffect, useState } from 'react';
import { FolderGit2, ExternalLink, Star } from 'lucide-react';

export function GithubRepos({ username }) {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
            .then((res) => res.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setRepos(data);
                }
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error cargando repositorios:", err);
                setLoading(false);
            });
    }, [username]);

    if (loading) return <p className="text-center text-gray-400">Cargando repositorios de GitHub...</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo) => (
                <div key={repo.id} className="repo-card border border-gray-700 bg-gray-800 p-4 rounded-lg flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <FolderGit2 className="w-5 h-5 text-blue-400" />
                            <h3 className="font-bold text-lg text-white truncate">{repo.name}</h3>
                        </div>
                        <p className="text-gray-300 text-sm mb-4">
                            {repo.description || "Proyecto sin descripción."}
                        </p>
                    </div>
                    <div>
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                            <span>{repo.language || "Código"}</span>
                            <span className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-400" /> {repo.stargazers_count}
                            </span>
                        </div>
                        {/* Enlace público de solo lectura */}
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-blue-400 hover:underline"
                        >
                            Ver código en GitHub <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}